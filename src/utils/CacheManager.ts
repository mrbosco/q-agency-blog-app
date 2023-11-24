/* eslint-disable @typescript-eslint/no-explicit-any */
const CACHE_DURATION = 5 * 60 * 1000;

class CacheManager {
  cache = new Map<string, { data: any; timestamp: number }>();

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp < CACHE_DURATION) {
      return item.data;
    }

    this.cache.delete(key);
    return null;
  }

  set(key: string, data: any) {
    const timestamp = Date.now();
    this.cache.set(key, { data, timestamp });
  }
}

export const cacheManager = new CacheManager();
