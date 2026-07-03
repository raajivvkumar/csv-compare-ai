const cache = new Map();

export function setCache(key, value) {
  cache.set(key, value);
}

export function getCache(key) {
  return cache.get(key);
}

export function hasCache(key) {
  return cache.has(key);
}

export function removeCache(key) {
  cache.delete(key);
}

export function clearCache() {
  cache.clear();
}
