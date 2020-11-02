import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import CarouselEquipementComponent from './carouselEquipements';
import BoutonCardEquipements from './boutonCardEquipements';
import NextPage from '../nextPage';
import Container from 'react-bootstrap/Container';
import {connect} from 'react-redux';


const Equipements = ()=> {

    const page = useSelector((state)=>state.page) 
    const paths = useSelector((state)=>state.paths) 
    const equipementsChoix = useSelector(state => state.equipements)

    const displayEquipements = () => {

        return Object.keys(equipementsChoix).map(key => (
            <BoutonCardEquipements key={equipementsChoix[key].id} equipements={equipementsChoix[key].imgCard} name={equipementsChoix[key].name}/>         
            ));
        }

return (
    <Container fluid>
    
    <CarouselEquipementComponent/>
    
    
     <div  className="card-deck">
          
        <div className="row">
    
     {displayEquipements()}
     </div>
     </div>
      <div className="footer">
          <FooterComponent/>
          <NextPage
            nextPath={paths[5]}
            nextPageName={page[6]}
          />

        </div>
    </Container>
)

}

export default connect()(Equipements);