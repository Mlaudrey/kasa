import React from "react";
import './App.scss';
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './404/Not-found.js';
import InfosLogement from './component/Logements/logements.js';
import MyContext from './MyContext.js';
import Pages2 from './component/Pages2/Pages2.js';

const App = () => {
  const basenameValue = '/APP'; 

  return (
    <MyContext.Provider value={{ basename: basenameValue }}>
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
    </MyContext.Provider>
  );
};

export default App;