import { compareRecord } from "../recordComparator.js";

export function compareRecords({
  sourceFile,

  targetFile,

  mapping,

  settings = {},
}) {
  const sourceRecords = sourceFile.records;

  const targetRecords = targetFile.records;

  const keyField = mapping.recordId || "Record ID";

  const targetIndex = new Map();

  for (const record of targetRecords) {
    targetIndex.set(record[keyField], record);
  }

  const matches = [];
  const mismatches = [];

  for (const source of sourceRecords) {
    const target = targetIndex.get(source[keyField]);

    if (!target) {
      mismatches.push({
        recordId: source[keyField],

        reason: "Missing in target",
      });

      continue;
    }

    const result = compareRecord(
      source,

      target,

      settings.compareFields || [],
    );

    if (result.matched) {
      matches.push(source[keyField]);
    } else {
      mismatches.push({
        recordId: source[keyField],

        differences: result.differences,
      });
    }
  }

  return {
    success: true,

    totalSource: sourceRecords.length,

    totalTarget: targetRecords.length,

    matched: matches.length,

    mismatched: mismatches.length,

    matches,

    mismatches,
  };
}
