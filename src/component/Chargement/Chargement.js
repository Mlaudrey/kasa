import React from "react";
import chargement from "../../assets/Image/chargement.png";
import logo from "../../assets/Image/kasa-logo-pink.png";
import "./Chargement.scss"

const Chargement =  () => {

        return <div className="loader-wrapper">
                    <img className="loader-text" src={logo} alt="logo kasa"/>
                    <img className="loader-image" src={chargement} alt="Loading icon"/>
                 
                </div>
}

export default Chargement;