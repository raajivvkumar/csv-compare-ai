import { compareAggregate } from "../services/comparisonService.js";

self.onmessage = function (event) {
  try {
    const { sourceRows, targetRows, mapping, groupField } = event.data;

    const result = compareAggregate(
      sourceRows,
      targetRows,
      mapping,
      groupField,
    );

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
