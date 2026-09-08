/**
 * Simple in-memory rate limiter for MVP scale.
 * 
 * NOTE: This implementation stores data in memory and resets on serverless
 * cold starts. It does NOT work across multiple concurrent instances.
 * For production scale, replace with a distributed store like Upstash Redis.
 * 
 * Current limits: 5 requests per 15 minutes per IP.
 */

interface RateLimitRecord {
  count: number;
  resetAt: number; // timestamp when the window resets
}

const store = new Map<string, RateLimitRecord>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): { allowed: boolean; remaining?: number; resetAt?: Date } {
  const now = Date.now();
  const record = store.get(ip);

  // No record yet – create one
  if (!record) {
    store.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt: new Date(now + WINDOW_MS) };
  }

  // If the window has expired, reset
  if (now > record.resetAt) {
    store.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt: new Date(now + WINDOW_MS) };
  }

  // Window still active – check count
  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, resetAt: new Date(record.resetAt) };
  }

  // Increment and allow
  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - record.count, resetAt: new Date(record.resetAt) };
}