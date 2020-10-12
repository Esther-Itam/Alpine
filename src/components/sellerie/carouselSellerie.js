
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import {useSelector} from 'react-redux'




const CarouselSellerieComponent = () => {
    const carouselImagesSellerie= useSelector((state)=> state.carouselImagesSellerie)

       
    const displayCarouselImagesSellerie = () => {
        return Object.keys(carouselImagesSellerie).map(key => (
        
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselImagesSellerie[key].imgCard} 
                            alt="First slide"
                        />
                    </Carousel.Item>
                    ));
    
     }   
       return (
     
            <div   className="box">
                <Carousel className="carousel">
                {displayCarouselImagesSellerie()}
                </Carousel>
                <NavComponent/>
            </div>
    );

}
export default CarouselSellerieComponent;