/**
 * AggregateResult
 * ----------------
 * Standard model representing one aggregate comparison result.
 *
 * Example:
 *  Donor A
 *      File1 : 125 payments | ₹15,420
 *      File2 : 124 payments | ₹15,420
 *
 * Used by:
 *  - Aggregate Engine
 *  - Result Table
 *  - Dashboard
 *  - AI Explanation
 *  - Excel Export
 *  - PDF Export
 */

export default class AggregateResult {
  constructor({
    groupKey = "",

    source1 = {},
    source2 = {},

    countMatched = false,
    amountMatched = false,

    difference = {},

    status = "UNKNOWN",
  } = {}) {
    this.groupKey = groupKey;

    this.source1 = {
      count: source1.count ?? 0,
      amount: source1.amount ?? 0,
    };

    this.source2 = {
      count: source2.count ?? 0,
      amount: source2.amount ?? 0,
    };

    this.countMatched = countMatched;
    this.amountMatched = amountMatched;

    this.difference = {
      count: difference.count ?? 0,
      amount: difference.amount ?? 0,
    };

    this.status = status;
  }

  /**
   * Convert model to plain JSON
   */
  toJSON() {
    return {
      groupKey: this.groupKey,

      source1: this.source1,
      source2: this.source2,

      countMatched: this.countMatched,
      amountMatched: this.amountMatched,

      difference: this.difference,

      status: this.status,
    };
  }
}
