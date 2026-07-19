"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  emptyMarketVoteResults,
  MARKET_DATE_OPTIONS,
  MARKET_VOTER_TYPES,
  type MarketDateChoice,
  type MarketVoteResults,
  type MarketVoterType,
} from "@/lib/marketVote";

const DEVICE_KEY = "amity-market-vote-device";
const VOTED_KEY = "amity-market-vote-complete";

function createDeviceId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().replaceAll("-", "_");
  }

  return `${Date.now()}_${Math.random().toString(36).slice(2)}_${Math.random().toString(36).slice(2)}`;
}

function getDeviceId() {
  try {
    const existing = window.localStorage.getItem(DEVICE_KEY);
    if (existing) return existing;
    const next = createDeviceId();
    window.localStorage.setItem(DEVICE_KEY, next);
    return next;
  } catch {
    return createDeviceId();
  }
}

export default function MarketDatePoll() {
  const [dateChoice, setDateChoice] = useState<MarketDateChoice | "">("");
  const [voterType, setVoterType] = useState<MarketVoterType | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<MarketVoteResults>(emptyMarketVoteResults());
  const [showResults, setShowResults] = useState(false);
  const [resultsUnavailable, setResultsUnavailable] = useState(false);

  useEffect(() => {
    try {
      setShowResults(window.localStorage.getItem(VOTED_KEY) === "yes");
    } catch {
      setShowResults(false);
    }

    fetch("/api/market-date-vote", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Results unavailable");
        return (await response.json()) as MarketVoteResults;
      })
      .then(setResults)
      .catch(() => setResultsUnavailable(true));
  }, []);

  const maxVotes = useMemo(
    () => Math.max(1, ...Object.values(results.byDate)),
    [results.byDate],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!dateChoice || !voterType) {
      setStatus("error");
      setMessage("Choose a date and tell us how you are connected to the event.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("/api/market-date-vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateChoice,
          voterType,
          deviceId: getDeviceId(),
          name: formData.get("name"),
          businessName: formData.get("businessName"),
          comment: formData.get("comment"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        results?: MarketVoteResults;
      };

      if (!response.ok) throw new Error(data.error || "The vote could not be saved.");

      if (data.results) setResults(data.results);
      try {
        window.localStorage.setItem(VOTED_KEY, "yes");
      } catch {
        // The vote still saves if browser storage is unavailable.
      }
      setShowResults(true);
      setStatus("success");
      setMessage("Thank you. Your vote is in, and you can update it later from this same device if plans change.");
      form.reset();
      setDateChoice("");
      setVoterType("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The vote could not be saved right now.");
    }
  }

  return (
    <div className="market-vote-layout">
      <form className="market-vote-card" onSubmit={handleSubmit}>
        <div className="form-heading">
          <span className="eyebrow small">Choose one date</span>
          <h2>Which Saturday works best?</h2>
          <p>
            Pick the date you would be most likely to attend or set up. We are weighing vendor availability, nearby events, planning time, and what works for local families.
          </p>
        </div>

        <fieldset className="market-date-options">
          <legend className="sr-only">Choose your preferred market date</legend>
          {MARKET_DATE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`market-date-option ${dateChoice === option.value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="dateChoice"
                value={option.value}
                checked={dateChoice === option.value}
                onChange={() => setDateChoice(option.value)}
              />
              <span className="market-date-topline">
                <span className="market-date-day">{option.dayLabel}</span>
                <span className="market-date-check" aria-hidden="true" />
              </span>
              <strong>
                <span className="market-date-month">{option.month}</span>
                <span className="market-date-number">{option.dateNumber}</span>
              </strong>
              <small>{option.note}</small>
            </label>
          ))}
        </fieldset>

        <div className="market-role-field">
          <label htmlFor="voterType">How are you connected to the event? *</label>
          <select
            id="voterType"
            name="voterType"
            value={voterType}
            onChange={(event) => setVoterType(event.target.value as MarketVoterType)}
            required
          >
            <option value="" disabled>Select one</option>
            {MARKET_VOTER_TYPES.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="form-grid market-optional-fields">
          <label>
            <span>Name <em>optional</em></span>
            <input name="name" autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            <span>Business or booth name <em>optional</em></span>
            <input name="businessName" autoComplete="organization" placeholder="Business or booth name" />
          </label>
        </div>

        <label className="full-field">
          <span>Anything we should know? <em>optional</em></span>
          <textarea
            name="comment"
            rows={4}
            placeholder="A second-choice date, vendor schedule conflict, electricity need, or other useful note."
          />
        </label>

        <label className="market-honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <button className="submit-button" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Saving Vote..." : "Submit My Vote"}
        </button>

        {message ? (
          <p className={`form-message ${status === "success" ? "success" : "error"}`} role="status">
            {message}
          </p>
        ) : null}

        <p className="market-vote-privacy">
          Names and comments are only for planning and are not shown in the public results. One vote is kept per browser, and voting again from the same device updates the earlier choice.
        </p>
      </form>

      <aside className="market-results-card" aria-live="polite">
        <span className="eyebrow small">Community input</span>
        <h2>Current vote</h2>

        {!showResults ? (
          <div className="market-results-locked">
            <strong>Vote first, then see the count.</strong>
            <p>This keeps the early totals from steering your answer before you choose.</p>
          </div>
        ) : resultsUnavailable ? (
          <div className="market-results-locked">
            <strong>Your vote was recorded.</strong>
            <p>The public count is temporarily unavailable.</p>
          </div>
        ) : (
          <>
            <p className="market-total-votes">
              <strong>{results.total}</strong> total {results.total === 1 ? "vote" : "votes"}
            </p>

            <div className="market-result-list">
              {MARKET_DATE_OPTIONS.map((option) => {
                const count = results.byDate[option.value];
                const percent = results.total > 0 ? Math.round((count / results.total) * 100) : 0;
                const width = `${Math.max(4, (count / maxVotes) * 100)}%`;

                return (
                  <div key={option.value} className="market-result-row">
                    <div className="market-result-heading">
                      <strong>{option.label}</strong>
                      <span>{count} · {percent}%</span>
                    </div>
                    <div className="market-result-track">
                      <span style={{ width }} />
                    </div>
                    <small>{results.vendorByDate[option.value]} potential vendor {results.vendorByDate[option.value] === 1 ? "vote" : "votes"}</small>
                  </div>
                );
              })}
            </div>

            <p className="market-results-note">
              The highest total will help guide the decision, but vendor availability, city requirements, and nearby event conflicts still matter too.
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
