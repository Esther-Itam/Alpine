
import React from 'react';
import {Carousel} from 'react-bootstrap';
import legende from '../images/configurateur/modele/selection/legende.png'
import pure from '../images/configurateur/modele/selection/pure.png'



const BoutonCarousel = () => {
return(
    
    <Carousel>
  <Carousel.Item>
    <a><img
      className="d-block w-100"
      src={legende}
      alt="First slide"
    /></a>
    <Carousel.Caption>
      <h3>Modèle Légende</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <a><img
      className="d-block w-100"
      src={pure}
      alt="Third slide"
    /></a>

    <Carousel.Caption>
      <h3>Modèle Pure</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
)

}

export default BoutonCarousel;