import React from 'react';
import './Banner.scss';

const Banner = (props) => {
  return (
    <div className="background">
      <img
        src={props.image}
        className="background-image"
        alt="Paysage en plan large"
      />
      {props.title && <h1 className="background-title">{props.title}</h1>}
    </div>
  );
};

export default Banner;
//props est un objet qui contient toutes les propriétés passées à notre composant.