const PREFIX = "csv_compare_";

export function setSession(key, value) {
  sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function getSession(key) {
  const value = sessionStorage.getItem(PREFIX + key);

  return value ? JSON.parse(value) : null;
}

export function removeSession(key) {
  sessionStorage.removeItem(PREFIX + key);
}

export function clearSession() {
  Object.keys(sessionStorage)
    .filter((key) => key.startsWith(PREFIX))
    .forEach((key) => sessionStorage.removeItem(key));
}
