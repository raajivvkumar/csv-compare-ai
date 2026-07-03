import { detectColumns } from "../ai/aiDetector.js";
import { createColumnMapping } from "../ai/aiMapper.js";

export function detectHeaders(headers) {
  return detectColumns(headers);
}

export function buildColumnMapping(headers) {
  return createColumnMapping(headers);
}

export function getUnmappedFields(mapping) {
  return Object.entries(mapping)
    .filter(([key, value]) => !value)
    .map(([key]) => key);
}
