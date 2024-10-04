// Sidebar.jsx
import PropTypes from 'prop-types';
import '../../styles/Sidebar.css';

const Sidebar = ({ chapters, onSectionClick }) => {
  return (
    <div className="sidebar">
      <h2>Índice</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.numero}>
            <h3>{chapter.titulo}</h3>
            <ul>
              {chapter.points.map((point) => (
                <li key={point.numero} onClick={() => onSectionClick(point.secciones)}>
                  Punto {point.numero}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  chapters: PropTypes.array.isRequired,
  onSectionClick: PropTypes.func.isRequired,
};

export default Sidebar;
