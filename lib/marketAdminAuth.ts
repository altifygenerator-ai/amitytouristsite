import { createHmac, timingSafeEqual } from "node:crypto";

export const MARKET_ADMIN_COOKIE = "amity_market_admin";
const SESSION_SECONDS = 60 * 60 * 12;

function sessionSecret() {
  return (
    process.env.MARKET_ADMIN_SESSION_SECRET ||
    process.env.MARKET_VOTE_HASH_SALT ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    ""
  );
}

export function marketAdminConfigured() {
  return Boolean(process.env.MARKET_ADMIN_PASSWORD && sessionSecret());
}

export function marketAdminPasswordMatches(value: string) {
  const expected = process.env.MARKET_ADMIN_PASSWORD || "";
  if (!expected || !value) return false;
  const a = Buffer.from(expected);
  const b = Buffer.from(value);
  return a.length === b.length && timingSafeEqual(a, b);
}

function sign(expires: string) {
  return createHmac("sha256", sessionSecret())
    .update(`amity-market-admin:${expires}`)
    .digest("hex");
}

export function createMarketAdminSession() {
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return `${expires}.${sign(expires)}`;
}

export function marketAdminSessionValid(value: string | undefined) {
  if (!value || !marketAdminConfigured()) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature || !/^\d+$/.test(expires)) return false;
  if (Number(expires) <= Math.floor(Date.now() / 1000)) return false;

  const expected = sign(expires);
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}
