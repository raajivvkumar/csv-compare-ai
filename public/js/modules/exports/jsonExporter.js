export function exportJson(report) {
  const json = JSON.stringify(report, null, 4);

  const blob = new Blob([json], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "comparison-report.json";

  link.click();

  URL.revokeObjectURL(url);
}
