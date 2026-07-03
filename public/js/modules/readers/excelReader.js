import * as XLSX from "xlsx";

export async function readExcel(file) {
  const buffer = await file.arrayBuffer();

  const workbook = XLSX.read(buffer);

  const firstSheet = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[firstSheet];

  const records = XLSX.utils.sheet_to_json(worksheet, {
    defval: "",

    raw: false,
  });

  const headers = records.length ? Object.keys(records[0]) : [];

  return {
    fileName: file.name,

    extension: file.name.split(".").pop().toLowerCase(),

    size: file.size,

    headers,

    records,

    metadata: {
      sheetName: firstSheet,

      rowCount: records.length,

      columnCount: headers.length,
    },
  };
}
