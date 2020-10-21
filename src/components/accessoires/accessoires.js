import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import CarouselAccessoiresComponent from './carouselAccessoires';
import BoutonCardAccessoires from './boutonCardAccessoires';
import NextPage from '../nextPage';


const Accessoires = ()=> {

    const page = useSelector((state)=>state.page) 
    const paths = useSelector((state)=>state.paths) 
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
          <NextPage
            nextPath={paths[6]}
            nextPageName={page[7]}
          />

        </div>
    </div>
)

}

export default Accessoires;