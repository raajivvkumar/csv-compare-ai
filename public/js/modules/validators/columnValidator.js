/**
 * Validates required columns in a dataset.
 */

export function validateColumns(fileObject, requiredColumns = []) {
  if (!fileObject) {
    throw new Error("Invalid file object.");
  }

  if (!Array.isArray(fileObject.headers)) {
    throw new Error("Headers are missing.");
  }

  const missingColumns = requiredColumns.filter(
    (column) => !fileObject.headers.includes(column),
  );

  return {
    valid: missingColumns.length === 0,
    missingColumns,
  };
}
