import React from "react";
import './App.scss';
import Header from "./compenents/Header/Header.js"
import Footer from "./compenents/Footer/Footer.js"
import Home from "./compenents/Home/Home.js";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './404/Not-found.js';
import InfosLogement from './compenents/Logements/logements.js';

import Pages2 from './compenents/Pages2/Pages2.js';

const App = () => {
  const basenameValue = '/APP'; 

  return (
   
   <BrowserRouter>
   
      <div className='main-container'>
      <Header />
      <main>
      <Routes> 
         <Route path="/InfosLogement/:id" element={<InfosLogement  />} />
         <Route path="/Pages2" element={<Pages2 />} />
         <Route path="/" element={<Home />} />
         <Route path="/Not-found" element={<NotFound />} />
         <Route path="/*" element={<Navigate replace to="/Not-found" />} />
      </Routes>
      </main>
     </div>
     <Footer />
   
    </BrowserRouter>
    
  );
};


export default App;