import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { Button } from 'react-bootstrap';
import CarouselJantesComponent from './carouselJantes';
import {useSelector} from 'react-redux'
import BoutonCardJantes from './boutonCardJantes';



const Jantes = ()=> {
    
    const  jantesChoix = useSelector((state)=> state.jantes)   
  
 const displayJantes = () => {
        
        return Object.keys(jantesChoix).map(key => (
           
             
                <BoutonCardJantes key={jantesChoix[key].id} jantes={jantesChoix[key].imgCard } name={jantesChoix[key].string} px={jantesChoix[key].px}/>
            
               ));
        }

return (
    
 
    <div  >
          
        <CarouselJantesComponent/>
        <div  className="card-deck">
          
        <div className="row">
            {displayJantes()}
        </div>
        </div>
    
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./sellerie">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Sellerie</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Jantes;