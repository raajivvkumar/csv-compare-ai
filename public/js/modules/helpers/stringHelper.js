import { normalizeText } from "./normalizeText.js";

export function equalsIgnoreCase(first = "", second = "") {
  return normalizeText(first) === normalizeText(second);
}

export function isBlank(value) {
  return value === null || value === undefined || String(value).trim() === "";
}

export function contains(first = "", second = "") {
  return normalizeText(first).includes(normalizeText(second));
}
