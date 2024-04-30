
import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: options.method || 'GET',
          headers: options.headers || {},
          body: options.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel fetch request if component unmounts or URL changes
    return () => {
      // Cleanup logic here if needed
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch
