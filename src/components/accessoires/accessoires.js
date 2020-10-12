import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import { Button} from 'react-bootstrap';
import CarouselAccessoiresComponent from './carouselAccessoires';
import BoutonCardAccessoires from './boutonCardAccessoires';


const Accessoires = ()=> {

    const accessoiresChoix =useSelector(state => state.accessoires)
    const displayAccessoires = () => {
        
        
        return Object.keys(accessoiresChoix).map(key => (
             

            <BoutonCardAccessoires key={accessoiresChoix[key].id} accessoires={accessoiresChoix[key].imgCard} name={accessoiresChoix[key].name}/>         

            ));
        }

return (
    <div>
    
    <CarouselAccessoiresComponent/>
      
     <div  className="card-deck">
          
        <div className="row">
    
     {displayAccessoires()}
     </div>
     </div>
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Récapitulatif</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Accessoires;