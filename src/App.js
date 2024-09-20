import React from 'react';
import logements from './data/logements.json'; // Import des données JSON
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Pages2 from './components/Pages2/Pages2';

function App() {
  console.log(logements); // Pour vérifier si les données JSON sont bien importées

  return (
    <div className="App">
      <Pages2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages2" element={<Pages2 />} />
      </Routes>
    </div>
  );
}

export default App;
