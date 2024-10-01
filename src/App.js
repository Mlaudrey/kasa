import React from "react";
import "./App.scss";
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import Home from "./Pages/Home/Home.js";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from "./Pages/404/Not-found.js";
import FicheLogement from "./Pages/Fiche-Logement/Fiche-Logement.js"
import MyContext from "./MyContext.js";
import About from "./Pages/About/About.js"; 

const App = () => {
  const basenameValue = '/APP'; 

  return (
    <MyContext.Provider value={{ basename: basenameValue }}>
      <BrowserRouter>
        <div className='main-container'>
          <Header />
          <main>
            <Routes>
              <Route path="/Fiche-Logement/:id" element={<FicheLogement />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/" element={<Home />} />
              <Route path="/Not-found" element={<NotFound />} />
              <Route path="/*" element={<Navigate replace to="/Not-found" />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
