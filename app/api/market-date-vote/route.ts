import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  aggregateMarketVotes,
  MARKET_DATE_OPTIONS,
  MARKET_VOTER_TYPES,
  type MarketDateChoice,
  type MarketVoteRow,
  type MarketVoterType,
} from "@/lib/marketVote";
import { getSupabaseConfig, supabaseRest } from "@/lib/supabaseRest";

export const dynamic = "force-dynamic";

const allowedDates = new Set<string>(MARKET_DATE_OPTIONS.map((option) => option.value));
const allowedRoles = new Set<string>(MARKET_VOTER_TYPES);

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function requestIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const requestHost =
      request.headers.get("x-forwarded-host") ||
      request.headers.get("host") ||
      request.nextUrl.host;
    return new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

export async function GET() {
  if (!getSupabaseConfig()) {
    return NextResponse.json(
      { error: "Market voting is not configured yet." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const rows = await supabaseRest<MarketVoteRow[]>(
      "amity_market_date_votes?select=date_choice,voter_type&order=created_at.asc",
    );

    return NextResponse.json(aggregateMarketVotes(rows), {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Results could not be loaded right now." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!getSupabaseConfig()) {
    return NextResponse.json(
      { error: "Market voting is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const dateChoice = cleanText(body.dateChoice, 20) as MarketDateChoice;
    const voterType = cleanText(body.voterType, 50) as MarketVoterType;
    const deviceId = cleanText(body.deviceId, 100);
    const name = cleanText(body.name, 100);
    const businessName = cleanText(body.businessName, 140);
    const comment = cleanText(body.comment, 600);
    const honeypot = cleanText(body.website, 200);

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!allowedDates.has(dateChoice)) {
      return NextResponse.json({ error: "Choose one of the listed dates." }, { status: 400 });
    }

    if (!allowedRoles.has(voterType)) {
      return NextResponse.json({ error: "Choose how you are connected to the event." }, { status: 400 });
    }

    if (!/^[a-zA-Z0-9_-]{20,100}$/.test(deviceId)) {
      return NextResponse.json({ error: "Your browser vote ID could not be verified." }, { status: 400 });
    }

    const ipHash = createHash("sha256")
      .update(`${requestIp(request)}:${process.env.MARKET_VOTE_HASH_SALT ?? "amity-market"}`)
      .digest("hex");

    const payload = {
      device_id: deviceId,
      date_choice: dateChoice,
      voter_type: voterType,
      name: name || null,
      business_name: businessName || null,
      comment: comment || null,
      ip_hash: ipHash,
      user_agent: cleanText(request.headers.get("user-agent"), 300) || null,
      updated_at: new Date().toISOString(),
    };

    await supabaseRest<unknown[]>(
      "amity_market_date_votes?on_conflict=device_id",
      {
        method: "POST",
        headers: {
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify(payload),
      },
    );

    const rows = await supabaseRest<MarketVoteRow[]>(
      "amity_market_date_votes?select=date_choice,voter_type&order=created_at.asc",
    );

    return NextResponse.json({ ok: true, results: aggregateMarketVotes(rows) });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "The vote could not be saved right now." },
      { status: 500 },
    );
  }
}
