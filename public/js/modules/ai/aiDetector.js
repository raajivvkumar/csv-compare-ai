import HEADER_ALIASES from "../constants/headerAliases.js";
import { normalizeText } from "../helpers/normalizeText.js";

/**
 * Detect standard column names from uploaded headers.
 */

export function detectColumns(headers = []) {
  const detected = {};

  headers.forEach((header) => {
    const normalized = normalizeText(header);

    if (HEADER_ALIASES[normalized]) {
      detected[HEADER_ALIASES[normalized]] = header;
    }
  });

  return detected;
}
