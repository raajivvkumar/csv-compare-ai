import AggregateResult from "../../models/AggregateResult.js";
import { parseAmount } from "../../helpers/amountHelper.js";
import { createGroupKey } from "../../helpers/dataHelper.js";
/**
 * Aggregate Comparison Engine
 *
 * Compares grouped records between two datasets.
 *
 * Returns:
 * [
 *   {
 *      groupKey,
 *      sourceCount,
 *      targetCount,
 *      sourceTotal,
 *      targetTotal,
 *      difference,
 *      status
 *   }
 * ]
 */

export function compareAggregates({
  sourceRecords = [],
  targetRecords = [],
  groupBy = [],
  amountField,
}) {
  validateInputs({
    sourceRecords,
    targetRecords,
    groupBy,
    amountField,
  });

  const sourceGroups = buildGroups(sourceRecords, groupBy, amountField);

  const targetGroups = buildGroups(targetRecords, groupBy, amountField);

  return compareGroups(sourceGroups, targetGroups);
}

/**
 * Validate user input.
 */
function validateInputs({
  sourceRecords,
  targetRecords,
  groupBy,
  amountField,
}) {
  if (!Array.isArray(sourceRecords)) {
    throw new Error("sourceRecords must be an array");
  }

  if (!Array.isArray(targetRecords)) {
    throw new Error("targetRecords must be an array");
  }

  if (!Array.isArray(groupBy)) {
    throw new Error("groupBy must be an array");
  }

  if (!amountField) {
    throw new Error("amountField is required");
  }
}

/**
 * Groups records and calculates count + total.
 */
function buildGroups(records, groupBy, amountField) {
  const groups = new Map();

  for (const record of records) {
    const key = createGroupKey(record, groupBy);

    if (!groups.has(key)) {
      groups.set(key, {
        count: 0,

        total: 0,
      });
    }

    const group = groups.get(key);

    group.count++;

    group.total += parseAmount(record[amountField]);
  }

  return groups;
}

/**
 * Compare grouped results.
 */
function compareGroups(sourceGroups, targetGroups) {
  const results = [];

  const allKeys = new Set([...sourceGroups.keys(), ...targetGroups.keys()]);

  for (const key of allKeys) {
    const source = sourceGroups.get(key) || {
      count: 0,
      total: 0,
    };

    const target = targetGroups.get(key) || {
      count: 0,
      total: 0,
    };

    const difference = source.total - target.total;

    results.push(
      new AggregateResult({
        groupKey: key,

        sourceCount: source.count,

        targetCount: target.count,

        sourceTotal: source.total,

        targetTotal: target.total,
      }),
    );
  }

  return results;
}
