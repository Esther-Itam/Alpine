import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import CarouselSellerieComponent from './carouselSellerie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BoutonCardSellerie from './boutonCardSellerie';
import NextPage from '../nextPage';



const Sellerie = ()=> {

    const page = useSelector((state)=>state.page) 
    const paths = useSelector((state)=>state.paths) 
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
          <NextPage
            nextPath={paths[4]}
            nextPageName={page[5]}
          />


        </div>
    </div>
)

}

export default Sellerie;