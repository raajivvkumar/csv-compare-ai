import { compareRecord } from "../public/js/modules/comparison/recordComparator.js";

describe("Record Comparator", () => {
  test("Should match identical values", () => {
    const source = {
      Amount: 100,

      Count: 2,
    };

    const target = {
      Amount: 100,

      Count: 2,
    };

    const result = compareRecord(
      source,

      target,

      ["Amount", "Count"],
    );

    expect(result.matched).toBe(true);

    expect(result.differences).toHaveLength(0);
  });

  test("Should detect mismatched values", () => {
    const source = {
      Amount: 100,

      Count: 2,
    };

    const target = {
      Amount: 120,

      Count: 2,
    };

    const result = compareRecord(
      source,

      target,

      ["Amount", "Count"],
    );

    expect(result.matched).toBe(false);

    expect(result.differences).toHaveLength(1);
  });
});
