import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { Link } from 'react-router-dom';
import CarouselJantesComponent from './carouselJantes';
import {useSelector} from 'react-redux'
import BoutonCardJantes from './boutonCardJantes';
import NextPage from '../nextPage';



const Jantes = ()=> {
    
    const page = useSelector((state)=>state.page) 
    const paths = useSelector((state)=>state.paths) 
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
          <NextPage
            nextPath={paths[3]}
            nextPageName={page[4]}
          />


        </div>
    </div>
)

}

export default Jantes;