import { useState, useEffect } from 'react';

export const useFetch = <T,>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformData?: (data: any) => Promise<T>
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        let jsonData = await response.json();

        if (transformData) {
          jsonData = await transformData(jsonData);
        }

        setData(jsonData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, transformData]);

  return { data, isLoading, error };
};
