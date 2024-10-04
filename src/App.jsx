import { useState } from 'react';
import './App.css';
import Sidebar from './components/Layout/Sidebar';
import Content from './components/Layout/Content';
import BibleVerses from './components/Layout/BibleVerses';
import confessionData from './data/confession.json';

function App() {
  const [selectedSection, setSelectedSection] = useState([]);

  const handleSectionClick = (sections) => {
    setSelectedSection(sections);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar chapters={confessionData.confesion.capitulos} onSectionClick={handleSectionClick} />
      </div>
      <div className="content">
        <Content sections={selectedSection} />
      </div>
      <div className="bible-verses">
        {selectedSection.length > 0 && <BibleVerses verseReferences={selectedSection.flatMap(section => section.referencias)} />}
      </div>
    </div>
  );
}

export default App;
