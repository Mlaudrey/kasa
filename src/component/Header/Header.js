//creer une navbar avec le logo a gauche et lien accueil et a propos à droite 

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/Image/kasa-logo-pink.png';


const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="nav-menu">
        <Link to="/" className="nav-links">
          Accueil
        </Link>
        <Link to="/About" className="nav-links">
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header


