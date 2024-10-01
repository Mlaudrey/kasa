import { useState } from 'react';
import './Gallery.scss';
import nextArrow from '../../assets/Image/next-arrow.svg';
import previousArrow from '../../assets/Image/previous-arrow.svg';

const Gallery = (props) => {
  //props est un objet qui contient toutes les propriétés passées à notre composant.
  const maxIndex = props.images.length - 1; //maxIndex est la valeur maximale du state counter

  const [counter, setCounter] = useState(0); //counter est le state, setCounter est la fonction qui permet de modifier le state
  //le 0 est la valeur initiale du state counter

  function prevImage() {
    // fonction qui permet de passer à l'image précédente dans le carrousel
    setCounter((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1)); //prevIndex est la valeur précédente du state
  }

  function nextImage() {
    // fonction qui permet de passer à l'image suivante dans le carrousel
    setCounter((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1)); //prevIndex est la valeur précédente du state
  }
  const carrouselImages = props.images.map((image, index) => (
    <div
      key={index}
      className={counter === index ? 'gallery-active' : 'gallery-slide'} //si counter est égal à l'index de l'image, on ajoute la classe carrousel-active, sinon on ajoute la classe carrousel-slide
    >
      {index === counter && ( //si l'index de l'image est égal à counter, on affiche l'image correspondante
        <img
          src={image}
          className="gallery-image"
          alt="Gallery d'images du logement."
        />
      )}
    </div>
  ));

  return (
    //on retourne le carrousel avec les flèches de navigation et la légende du carrousel si le nombre d'images est supérieur à 1
    <figure className="gallery">
      {carrouselImages}
      {props.images.length > 1 && ( // si le nombre d'images est supérieur à 1, on affiche les flèches
        <>
          <img
            src={previousArrow}
            onClick={prevImage}
            className="gallery-arrow previous"
            alt="Icône de défilement en avant de la gallery."
          />
          <img
            src={nextArrow}
            onClick={nextImage}
            className="gallery-arrow next"
            alt="Icône de défilement en arrière de la gallery."
          />
          <figcaption className="gallery-caption">
            {counter + 1}/{maxIndex + 1}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default Gallery;