import { exportJson } from "../exports/jsonExporter.js";

class ExportService {
  export(report, type = "json") {
    switch (type.toLowerCase()) {
      case "json":
        exportJson(report);

        break;

      default:
        throw new Error(`Unsupported export type: ${type}`);
    }
  }
}

export default new ExportService();
