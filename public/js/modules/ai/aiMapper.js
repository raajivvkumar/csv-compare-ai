import { normalizeText } from "../helpers/normalizeText.js";
import HEADER_ALIASES from "../constants/headerAliases.js";
import SYNONYMS from "../constants/synonyms.js";

/**
 * Automatically maps source headers to target headers.
 */

export function mapColumns(sourceHeaders = [], targetHeaders = []) {
  const mappings = [];

  for (const sourceHeader of sourceHeaders) {
    const sourceNormalized = normalizeText(sourceHeader);

    let matchedHeader = null;
    let confidence = 0;

    // Exact Match

    for (const targetHeader of targetHeaders) {
      const targetNormalized = normalizeText(targetHeader);

      if (sourceNormalized === targetNormalized) {
        matchedHeader = targetHeader;
        confidence = 100;
        break;
      }
    }

    // Alias Match

    if (!matchedHeader) {
      const sourceAlias = HEADER_ALIASES[sourceNormalized];

      for (const targetHeader of targetHeaders) {
        const targetAlias = HEADER_ALIASES[normalizeText(targetHeader)];

        if (sourceAlias && sourceAlias === targetAlias) {
          matchedHeader = targetHeader;
          confidence = 95;
          break;
        }
      }
    }

    // Synonym Match

    if (!matchedHeader) {
      for (const [key, synonyms] of Object.entries(SYNONYMS)) {
        if (!synonyms.includes(sourceNormalized)) {
          continue;
        }

        for (const targetHeader of targetHeaders) {
          const targetNormalized = normalizeText(targetHeader);

          if (synonyms.includes(targetNormalized)) {
            matchedHeader = targetHeader;
            confidence = 90;
            break;
          }
        }

        if (matchedHeader) {
          break;
        }
      }
    }

    mappings.push({
      source: sourceHeader,

      target: matchedHeader,

      confidence,

      mapped: matchedHeader !== null,
    });
  }

  return mappings;
}
