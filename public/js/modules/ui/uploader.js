import { readFile } from "../readers/fileReader.js";
import { validateData } from "../validators/dataValidator.js";

export async function loadFile(file) {
  const fileObject = await readFile(file);

  validateData(fileObject);

  return fileObject;
}

export async function loadFiles(sourceFile, targetFile) {
  const source = await loadFile(sourceFile);

  const target = await loadFile(targetFile);

  return {
    source,
    target,
  };
}
