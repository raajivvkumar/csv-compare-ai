export function findMissingRecords(
  sourceRecords = [],

  targetRecords = [],

  keyField,
) {
  const targetKeys = new Set(targetRecords.map((record) => record[keyField]));

  return sourceRecords.filter((record) => !targetKeys.has(record[keyField]));
}
