import React from 'react';
import '../App.css';
import BoutonCarousel from './boutonCarrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FooterComponent from './footer';
import Button from 'react-bootstrap/Button';
import BoutonCard from './boutonCard';



const Couleur = () => {
  
    return (
      <div className="App">

        <BoutonCarousel/>
        <BoutonCard/>
        <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./couleur">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Couleurs</span>
              </div>
          </Button>
    
        </div>
            
      </div>
    );
  
}

export default Couleur;