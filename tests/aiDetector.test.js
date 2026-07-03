import { detectColumns } from "../public/js/modules/ai/aiDetector.js";

describe("AI Header Detection", () => {
  test("Should detect standard headers", () => {
    const headers = ["Supporter", "Gift Amount", "Payment Date", "Receipt No"];

    const detected = detectColumns(headers);

    expect(detected.Donor).toBe("Supporter");

    expect(detected.Amount).toBe("Gift Amount");

    expect(detected.Date).toBe("Payment Date");

    expect(detected["Record ID"]).toBe("Receipt No");
  });
});
