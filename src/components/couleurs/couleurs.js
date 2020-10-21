import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import FooterComponent from '../footer';
import CarouselColorComponent from './carouselColor';
import {useSelector} from 'react-redux'
import BoutonCardColor from './boutonCardColor';
import NextPage from '../nextPage';



const Couleurs = () => {

  const page = useSelector((state)=>state.page) 
  const paths = useSelector((state)=>state.paths) 
  const  couleursChoix= useSelector((state)=> state.couleurs)

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
          <NextPage
            nextPath={paths[2]}
            nextPageName={page[3]}
          />

          </div>

      </div>
    );

}

export default Couleurs;