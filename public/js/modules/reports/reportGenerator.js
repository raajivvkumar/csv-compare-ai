/**
 * Report Generator
 */

export function generateReport(result) {
  if (!result) {
    throw new Error("Comparison result is required.");
  }

  return {
    generatedAt: new Date().toISOString(),
    success: result.success,
    summary: {
      totalSource: result.totalSource ?? 0,
      totalTarget: result.totalTarget ?? 0,
      matched: result.matched ?? 0,
      mismatched: result.mismatched ?? 0,
    },
    matches: result.matches ?? [],
    mismatches: result.mismatches ?? [],
    aggregate: result.aggregate ?? null,
  };
}
