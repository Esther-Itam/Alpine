import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import FooterComponent from '../footer';
import Button from 'react-bootstrap/Button';
import CarouselColorComponent from './carouselColor';
import {useSelector} from 'react-redux'
import BoutonCardColor from './boutonCardColor';


const Couleurs = () => {

  const  couleursChoix= useSelector((state)=> state.couleurs)
  console.log(couleursChoix)


     const displayColorSelectionCards = () => {
        
        return Object.keys(couleursChoix).map(key => 
             
        (
       
        <BoutonCardColor key={couleursChoix[key].id} couleurs={couleursChoix[key].imgCard} name={couleursChoix[key].name} px={couleursChoix[key].px} />
                
        ));
      }

    return (
      <div>

        <CarouselColorComponent/>
        <div className="card-deck">
        <div class="row">
        {displayColorSelectionCards()}
        </div>
        </div>
        <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./jantes">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Jantes</span>
              </div>
          </Button>
          </div>

      </div>
    );

}

export default Couleurs;