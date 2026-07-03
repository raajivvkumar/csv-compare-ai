/**
 * Calculates similarity percentage between two strings.
 */

export function similarity(first = "", second = "") {
  first = first.toLowerCase();
  second = second.toLowerCase();

  if (first === second) {
    return 100;
  }

  let matches = 0;

  const length = Math.max(first.length, second.length);

  for (let i = 0; i < Math.min(first.length, second.length); i++) {
    if (first[i] === second[i]) {
      matches++;
    }
  }

  return Math.round((matches / length) * 100);
}
