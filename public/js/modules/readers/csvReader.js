import Papa from "papaparse";

export async function readCsv(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,

      skipEmptyLines: true,

      dynamicTyping: false,

      transformHeader: (header) => header.trim(),

      complete(result) {
        resolve({
          fileName: file.name,

          extension: "csv",

          size: file.size,

          headers: result.meta.fields || [],

          records: result.data,

          metadata: {
            rowCount: result.data.length,

            columnCount: result.meta.fields?.length || 0,

            sheetName: null,
          },
        });
      },

      error(error) {
        reject(error);
      },
    });
  });
}
