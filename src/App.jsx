import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Layout/Sidebar";
import Content from "./components/Layout/Content";
import BibleVerses from "./components/Layout/BibleVerses";
import Header from "./components/Common/Header";
import confessionData from "./data/confession.json";

function App() {
  const [selectedSection, setSelectedSection] = useState([]);

  const handleSectionClick = (sections) => {
    setSelectedSection(sections);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar
          chapters={confessionData.confesion.capitulos}
          onSectionClick={handleSectionClick}
        />
        <Content sections={selectedSection} />
        {selectedSection.length > 0 && (
          <BibleVerses
            verseReferences={selectedSection.flatMap(
              (section) => section.referencias
            )}
          />
        )}
      </div>
    </>
  );
}

export default App;
