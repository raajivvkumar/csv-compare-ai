import { validateFile } from "../validators/fileValidator.js";
import { readCsv } from "./csvReader.js";
import { readExcel } from "./excelReader.js";

export async function readFile(file) {
  validateFile(file);

  const extension = file.name.split(".").pop().toLowerCase();

  switch (extension) {
    case "csv":
      return await readCsv(file);

    case "xlsx":
    case "xls":
      return await readExcel(file);

    default:
      throw new Error(`Unsupported file type: ${extension}`);
  }
}
