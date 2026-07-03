import AggregateResult from "../../models/AggregateResult.js";
import { parseAmount } from "../../helpers/amountHelper.js";
import { createGroupKey } from "../../helpers/dataHelper.js";
class ComparisonLogger {
  info(message, data = null) {
    console.log("[Comparison]", message, data);
  }

  warn(message, data = null) {
    console.warn("[Comparison]", message, data);
  }

  error(message, data = null) {
    console.error("[Comparison]", message, data);
  }
}

export default new ComparisonLogger();
