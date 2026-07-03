export default class ColumnMapping {
  constructor({
    source = "",

    target = "",

    confidence = 0,

    mapped = false,
  } = {}) {
    this.source = source;

    this.target = target;

    this.confidence = confidence;

    this.mapped = mapped;
  }
}
