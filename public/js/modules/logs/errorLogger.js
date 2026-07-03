export function logError(error) {
  console.error(`[${new Date().toISOString()}]`, error);
}

export function logWarning(message) {
  console.warn(`[${new Date().toISOString()}]`, message);
}

export function logInfo(message) {
  console.info(`[${new Date().toISOString()}]`, message);
}
