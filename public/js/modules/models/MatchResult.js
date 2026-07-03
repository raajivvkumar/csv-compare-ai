export default class MatchResult {
  constructor({ recordId = "" } = {}) {
    this.recordId = recordId;

    this.status = "MATCH";
  }
}
