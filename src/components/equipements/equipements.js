import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import { Button} from 'react-bootstrap';
import CarouselEquipementComponent from './carouselEquipements';
import BoutonCardEquipements from './boutonCardEquipements';


const Equipements = ()=> {

    const equipementsChoix =useSelector(state => state.equipements)
    const displayEquipements = () => {
        
        
        return Object.keys(equipementsChoix).map(key => (
             

            <BoutonCardEquipements key={equipementsChoix[key].id} equipements={equipementsChoix[key].imgCard} name={equipementsChoix[key].name}/>         

            ));
        }

return (
    <div>
    
    <CarouselEquipementComponent/>
    
    
     <div  className="card-deck">
          
        <div className="row">
    
     {displayEquipements()}
     </div>
     </div>
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./accessoires">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Accessoires</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Equipements;