import { compareRecords } from "../services/comparisonService.js";

self.onmessage = function (event) {
  try {
    const { sourceRows, targetRows, mapping } = event.data;

    const result = compareRecords(sourceRows, targetRows, mapping);

    self.postMessage({
      success: true,
      result,
    });
  } catch (error) {
    self.postMessage({
      success: false,
      message: error.message,
    });
  }
};
