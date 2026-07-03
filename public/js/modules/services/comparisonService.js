import COMPARE_MODES from "../constants/compareModes.js";

import { compareRecords } from "../comparison/engines/compareEngine.js";
import { compareAggregates } from "../comparison/engines/aggregateEngine.js";

class ComparisonService {
  compare(options = {}) {
    switch (options.mode) {
      case COMPARE_MODES.RECORD:
        return compareRecords(options);

      case COMPARE_MODES.AGGREGATE:
        return compareAggregates(options);

      case COMPARE_MODES.RECORD_AND_AGGREGATE:
        return {
          record: compareRecords(options),

          aggregate: compareAggregates(options),
        };

      default:
        throw new Error("Unknown comparison mode.");
    }
  }
}

export default new ComparisonService();
