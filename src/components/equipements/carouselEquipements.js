
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import {useSelector} from 'react-redux';
import equipements from '../../reducers/index';




const CarouselEquipementComponent = () => {
    const CarouselEquipements= useSelector((state)=> state.carouselImagesEquipements)

       
    const displayCarouselImagesEquipements = () => {
        return Object.keys(CarouselEquipements).map(key => (
        
                   
            <div className="ImgCarousel">   
                
            <div className="row" className="container">
                

                <img
                    className="d-block w-100 m-50" className="image"
                    src={CarouselEquipements[key].imgCard} 
                    alt="First slide"
                />  
                <div class="middle">
                    <button class="text">Sélectionner</button>
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


