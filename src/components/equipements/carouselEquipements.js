
import React from 'react';
import NavComponent from './nav';
import {useSelector} from 'react-redux';
import BoutonSelectionComponent from './boutonSelection';
import { useState } from 'react';



const CarouselEquipementComponent = (props) => {
    const CarouselEquipements= useSelector((state)=> state.carouselImagesEquipements)
    const count = useSelector(state => state.mediaVue)

      
    const displayCarouselImagesEquipements = () => {
        return Object.keys(CarouselEquipements).map(key => (
        
                   
            <div className="ImgCarousel">   
                
            <div className="row" className="container">
                

                <img
                    className="d-block w-100 m-50" className="image"
                    src={CarouselEquipements[key].imgCard} 
                    alt="First slide"
                />  
                <div className="middle">
                 
                <BoutonSelectionComponent/>
                </div>                
                   
            </div>

            <div>   
                <h3 >{CarouselEquipements[key].name}</h3>
                <h4 >{CarouselEquipements[key].px} €</h4>
            </div>  
            </div>      
                    
        ));
    
     }   
       return (
     
            <div className="box">
                <div className="presentationCarousel">
                {displayCarouselImagesEquipements()}
                </div>
                <NavComponent/>
            </div>
    );

}
export default CarouselEquipementComponent;


