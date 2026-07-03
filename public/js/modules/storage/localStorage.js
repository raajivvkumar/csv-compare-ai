const PREFIX = "csv_compare_";

export function setItem(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function getItem(key) {
  const value = localStorage.getItem(PREFIX + key);

  return value ? JSON.parse(value) : null;
}

export function removeItem(key) {
  localStorage.removeItem(PREFIX + key);
}

export function clearStorage() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith(PREFIX))
    .forEach((key) => localStorage.removeItem(key));
}
