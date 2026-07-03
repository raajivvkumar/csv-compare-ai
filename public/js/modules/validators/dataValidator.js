export function validateData(fileObject) {
  if (!fileObject) {
    throw new Error("Invalid file object.");
  }

  if (!Array.isArray(fileObject.headers)) {
    throw new Error("Headers not found.");
  }

  if (!Array.isArray(fileObject.records)) {
    throw new Error("Records not found.");
  }

  if (fileObject.records.length === 0) {
    throw new Error("No records found.");
  }

  return {
    valid: true,

    totalRows: fileObject.records.length,

    totalColumns: fileObject.headers.length,
  };
}
