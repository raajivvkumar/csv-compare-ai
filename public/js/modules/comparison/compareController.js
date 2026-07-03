import comparisonService from "../services/comparisonService.js";
import COMPARE_MODES from "../constants/compareModes.js";

export async function compare(options = {}) {
  const {
    mode = COMPARE_MODES.RECORD,
    sourceFile,
    targetFile,
    mapping = {},
    settings = {},
  } = options;

  return comparisonService.compare({
    mode,
    sourceFile,
    targetFile,
    mapping,
    settings,
  });
}
