/**
 * Compares two records using selected fields.
 *
 * Returns:
 * {
 *   matched: Boolean,
 *   differences: []
 * }
 */

export function compareRecord(source, target, fields = []) {
  const differences = [];

  for (const field of fields) {
    const sourceValue = source[field] ?? "";
    const targetValue = target[field] ?? "";

    if (sourceValue !== targetValue) {
      differences.push({
        field,

        source: sourceValue,

        target: targetValue,
      });
    }
  }

  return {
    matched: differences.length === 0,

    differences,
  };
}
