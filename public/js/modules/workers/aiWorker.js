import { detectHeaders, buildColumnMapping } from "../services/aiService.js";

self.onmessage = function (event) {
  try {
    const { headers } = event.data;

    const detected = detectHeaders(headers);

    const mapping = buildColumnMapping(headers);

    self.postMessage({
      success: true,
      detected,
      mapping,
    });
  } catch (error) {
    self.postMessage({
      success: false,
      message: error.message,
    });
  }
};
