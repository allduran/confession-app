import PropTypes from 'prop-types';
import '../../styles/Content.css';

const Content = ({ sections }) => {
  const content = {};
  sections.forEach((section, index) => {
    content[`section_${index + 1}`] = section.contenido;
  });

  return (
    <div className="content">
      <h2>Contenido</h2>
      {sections.length > 0 ? (
        Object.keys(content).map(key => (
          <div key={key} className="content-section">
            <p>{content[key]}</p>
          </div>
        ))
      ) : (
        <p>Seleccione una sección</p>
      )}
    </div>
  );
};

Content.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      contenido: PropTypes.string.isRequired,
      referencias: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            book: PropTypes.string.isRequired,
            chapter: PropTypes.number.isRequired,
            vers: PropTypes.string.isRequired,
          })
        )
      ).isRequired,
    })
  ).isRequired,
};

export default Content;
