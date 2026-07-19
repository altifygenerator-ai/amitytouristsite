export const MARKET_DATE_OPTIONS = [
  {
    value: "2026-09-19",
    label: "September 19",
    month: "September",
    dateNumber: "19",
    dayLabel: "Saturday",
    note: "The earlier fall option.",
  },
  {
    value: "2026-10-10",
    label: "October 10",
    month: "October",
    dateNumber: "10",
    dayLabel: "Saturday",
    note: "The second-Saturday option.",
  },
  {
    value: "2026-11-07",
    label: "November 7",
    month: "November",
    dateNumber: "7",
    dayLabel: "Saturday",
    note: "The later fall option.",
  },
] as const;

export const MARKET_VOTER_TYPES = [
  "Potential vendor",
  "Local resident",
  "Local business",
  "Possible sponsor",
  "Planning to attend",
] as const;

export type MarketDateChoice = (typeof MARKET_DATE_OPTIONS)[number]["value"];
export type MarketVoterType = (typeof MARKET_VOTER_TYPES)[number];

export type MarketVoteRow = {
  date_choice: MarketDateChoice;
  voter_type: MarketVoterType;
};

export type MarketVoteResults = {
  total: number;
  byDate: Record<MarketDateChoice, number>;
  vendorByDate: Record<MarketDateChoice, number>;
  byRole: Record<string, number>;
};

export function emptyMarketVoteResults(): MarketVoteResults {
  const byDate = Object.fromEntries(
    MARKET_DATE_OPTIONS.map((option) => [option.value, 0]),
  ) as Record<MarketDateChoice, number>;

  return {
    total: 0,
    byDate,
    vendorByDate: { ...byDate },
    byRole: {},
  };
}

export function aggregateMarketVotes(rows: MarketVoteRow[]): MarketVoteResults {
  const results = emptyMarketVoteResults();

  for (const row of rows) {
    if (!(row.date_choice in results.byDate)) continue;
    results.total += 1;
    results.byDate[row.date_choice] += 1;
    results.byRole[row.voter_type] = (results.byRole[row.voter_type] ?? 0) + 1;

    if (row.voter_type === "Potential vendor") {
      results.vendorByDate[row.date_choice] += 1;
    }
  }

  return results;
}
