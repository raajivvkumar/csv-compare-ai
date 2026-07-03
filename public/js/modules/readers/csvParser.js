/**
 * Parse CSV text into headers and rows.
 *
 * @param {string} csvText
 * @returns {{headers:string[],rows:Object[]}}
 */
export function parseCSV(csvText) {
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim() !== "");

  if (!lines.length) {
    return {
      headers: [],
      rows: [],
    };
  }

  const headers = parseLine(lines[0]);

  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);

    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });

    rows.push(row);
  }

  return {
    headers,
    rows,
  };
}

/**
 * Parse one CSV line.
 *
 * @param {string} line
 * @returns {string[]}
 */
function parseLine(line) {
  const result = [];

  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        value += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      result.push(value.trim());

      value = "";
    } else {
      value += char;
    }
  }

  result.push(value.trim());

  return result;
}
