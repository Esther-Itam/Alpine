
import React from 'react';
import NavComponent from './nav';
import {useSelector} from 'react-redux';




const CarouselAccessoiresComponent = () => {
    const CarouselAccessoires= useSelector((state)=> state.carouselImagesAccessoires)

       
    const displayCarouselImagesAccessoires = () => {
        return Object.keys(CarouselAccessoires).map(key => (
        
                   
            <div className="ImgCarousel">   
                
            <div className="row">
    
                <img
                    className="d-block w-100 m-50"
                    src={CarouselAccessoires[key].imgCard} 
                    alt="First slide"
                />                
            </div>

            <div>   
                <h3 >{CarouselAccessoires[key].name}</h3>
                <h4 >{CarouselAccessoires[key].px} €</h4>
            </div>  
            </div>      
                    
        ));
    
     }   
       return (
     
            <div className="box">
                <div className="presentationCarousel">
                {displayCarouselImagesAccessoires()}
                </div>
                <NavComponent/>
            </div>
    );

}
export default CarouselAccessoiresComponent;


