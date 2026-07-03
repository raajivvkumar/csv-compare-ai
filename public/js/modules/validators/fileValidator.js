const SUPPORTED_EXTENSIONS = ["csv", "xlsx", "xls"];

const MAX_FILE_SIZE = 100 * 1024 * 1024;

export function validateFile(file) {
  if (!file) {
    throw new Error("Please select a file.");
  }

  const extension = file.name

    .split(".")

    .pop()

    .toLowerCase();

  if (!SUPPORTED_EXTENSIONS.includes(extension)) {
    throw new Error(`Unsupported file type: ${extension}`);
  }

  if (file.size === 0) {
    throw new Error("Selected file is empty.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Maximum supported file size is 100 MB.");
  }

  return true;
}
