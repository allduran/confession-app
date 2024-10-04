import { useState, useEffect } from 'react';

const useFetch = (reference) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBibleVerse = async () => {
      try {
        const resp = await fetch(`https://bible-api.deno.dev/api/book/${reference.toLowerCase()}`);
        if (!resp.ok) throw new Error('Network response was not ok');
        const verseData = await resp.json();
        setData(verseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (reference) fetchBibleVerse();
  }, [reference]);

  return { data, loading, error };
};

export default useFetch;
