// BibleVerses.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/BibleVerses.css';

const BibleVerses = ({ verses }) => {
  const [verseData, setVerseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerses = async () => {
      setLoading(true);
      const results = [];

      for (const verse of verses) {
        const { referencia } = verse;

        try {
          const response = await fetch(`https://bible-api.deno.dev/api/book/${referencia}`);
          if (!response.ok) {
            throw new Error(`Error fetching verse: ${referencia}`);
          }
          const data = await response.json();
          results.push({ referencia, texto: data?.texto || "Versículo no encontrado." });
        } catch (err) {
          setError(`Error fetching ${referencia}: ${err.message}`);
          results.push({ referencia, texto: "Error al cargar versículo" });
        }
      }

      setVerseData(results);
      setLoading(false);
    };

    fetchVerses();
  }, [verses]);

  if (loading) return (<div className="bible-verses">Cargando...</div>)
  if (error) return (<div className="bible-verses">Error: {error}</div>)

  return (
    <div className="bible-verses">
      {verseData.map((verse) => (
        <div key={verse.referencia}>
          <h4>{verse.referencia}</h4>
          <p>{verse.texto}</p>
        </div>
      ))}
    </div>
  );
};

BibleVerses.propTypes = {
  verses: PropTypes.arrayOf(
    PropTypes.shape({
      referencia: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BibleVerses;
