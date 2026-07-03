import { generateReport } from "../reports/reportGenerator.js";

class ReportService {
  create(result) {
    return generateReport(result);
  }
}

export default new ReportService();
