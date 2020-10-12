
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import {useSelector} from 'react-redux';




const CarouselJantesComponent = () => {
    const carouselImagesJantes= useSelector((state)=> state.carouselImagesJantes)

       
    const displayCarouselImagesJantes = () => {
        return Object.keys(carouselImagesJantes).map(key => (
        
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImagesJantes[key].imgCard} 
                            alt="First slide"
                        />
                    </Carousel.Item>
                    ));
    
     }   
       return (
     
            <div   className="box">
                <Carousel className="carousel">
                {displayCarouselImagesJantes()}
                </Carousel>
                <NavComponent/>
            </div>
    );

}
export default CarouselJantesComponent;