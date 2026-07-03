export default class Mismatch {
  constructor({
    recordId = "",

    reason = "",

    differences = [],
  } = {}) {
    this.recordId = recordId;

    this.reason = reason;

    this.differences = differences;

    this.status = "MISMATCH";
  }
}
