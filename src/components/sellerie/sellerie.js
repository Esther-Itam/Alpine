import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import CarouselSellerieComponent from './carouselSellerie';
import { Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BoutonCardSellerie from './boutonCardSellerie';


const Sellerie = ()=> {
    const sellerie =useSelector(state => state.sellerie)
    const displaySellerie = () => {
        
        
        return Object.keys(sellerie).map(key => (
           
            <BoutonCardSellerie key={sellerie[key].id} sellerie={sellerie[key].imgCard } name={sellerie[key].name} px={sellerie[key].px}/>
            
               ));
        }

return (
    <div>
    
    <CarouselSellerieComponent/>
    
    <div  className="card-deck">
          
        <div className="row">
    
     {displaySellerie()}
     </div>
     </div>
    
    <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./equipements">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Equipements</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Sellerie;