
import React from 'react';
import NavComponent from './nav';
import {useSelector} from 'react-redux';




const CarouselAccessoiresComponent = () => {

    const CarouselAccessoires= useSelector((state)=> state.carouselImagesAccessoires)
      
    const displayCarouselImagesAccessoires = () => {
        return Object.keys(CarouselAccessoires).map(key => (
        
                   
            <div className="ImgCarouselAccessoires">   
                
            <div className="row" className="container">

                <img
                    className="d-block w-100 m-50" className="image"
                    src={CarouselAccessoires[key].imgCard} 
                    alt="First slide"
                />
                <div class="middle">
                    <button class="text">Sélectionner</button>
                </div>                
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


