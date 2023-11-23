import { cacheManager } from '@/utils/CacheManager';
import { useState, useEffect } from 'react';

export const useFetch = <T,>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformData?: (data: any) => Promise<T>
) => {
  const cachedData = cacheManager.get(url);
  const [data, setData] = useState<T | null>(cachedData || null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cachedData) return;

    const fetchData = async () => {
      setError(null);

      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        let jsonData = await response.json();

        if (transformData) {
          jsonData = await transformData(jsonData);
        }

        setData(jsonData);
        cacheManager.set(url, jsonData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, transformData, cachedData]);

  return { data, isLoading, error };
};
