/**
 * Data Helper
 */

/**
 * Safely returns a field value.
 */
export function getField(record, field) {
  if (!record) {
    return "";
  }

  return record[field] ?? "";
}

/**
 * Creates a composite key from one or more fields.
 */
export function createGroupKey(record, fields = []) {
  return fields.map((field) => getField(record, field)).join("||");
}

/**
 * Returns true if the value is empty.
 */
export function isEmpty(value) {
  return value === null || value === undefined || value === "";
}
