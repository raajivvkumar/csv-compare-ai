/**
 * Normalize text for comparisons.
 */

export function normalizeText(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "");
}
