  const keys = {};

export function createKey(ip, userId, durationMs = 60000) {
  const token = crypto.randomUUID();
  const now = Date.now();
  const keyData = {
    valid: true,
    deleted: false,
    info: {
      token,
      createdAt: now,
      expiresAfter: now + durationMs,
      userId,
    },
  };

  keys[ip] = keyData;
  return keyData;
}

export function getKey(ip) {
  const keyData = keys[ip];
  if (!keyData) return { valid: false };

  if (Date.now() > keyData.info.expiresAfter) {
    return { valid: false };
  }

  return keyData;
}
