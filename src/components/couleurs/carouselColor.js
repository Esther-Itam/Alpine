
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import {useSelector} from 'react-redux';




const CarouselColorComponent = () => {
    const CarouselImages= useSelector((state)=> state.carouselImagesCouleurs)

       
    const displayCarouselImages = () => {
        return Object.keys(CarouselImages).map(key => (
        
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImages[key].imgCard} 
                            alt="First slide"
                        />
                    </Carousel.Item>
                    ));
    
     }   
       return (
     
            <div   className="box">
                <Carousel className="carousel">
                {displayCarouselImages()}
                </Carousel>
                <NavComponent/>
            </div>
    );

}
export default CarouselColorComponent;