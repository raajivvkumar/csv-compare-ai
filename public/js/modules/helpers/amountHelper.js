/**
 * Amount Helper
 */

export function parseAmount(value) {
  if (value === null || value === undefined) {
    return 0;
  }

  if (typeof value === "number") {
    return value;
  }

  const cleaned = String(value).replace(/,/g, "").replace(/₹/g, "").trim();

  const amount = Number(cleaned);

  return Number.isNaN(amount) ? 0 : amount;
}

export function formatAmount(amount) {
  return Number(amount).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
