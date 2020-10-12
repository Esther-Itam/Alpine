import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';


const BoutonCardJantes = (props) => {
    const version = useSelector ((state)=>state.version)

   const dispatch = useDispatch();

    const choiceJantes = () => {
        dispatch({type:"CHOICE_JANTES", jantes : props.string, version:props.nameVersion});
    }
    
    return (
      
        <Card >
                    <button  onClick={() => choiceJantes()}>
                    <Card.Img variant="top" src={props.jantes.imgCard} alt=""/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.px} €
                    </Card.Text>
                    </Card.Body>
                    </button>
                </Card>
            
     
    );
}

export default BoutonCardJantes;




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




import React from 'react';
import '../../App.css';
import FooterComponent from '../footer';
import { Button } from 'react-bootstrap';
import CarouselJantesComponent from './carouselJantes';
import {useSelector} from 'react-redux'
import BoutonCardJantes from './boutonCardJantes';



const Jantes = ()=> {
    
    const jantesChoix = useSelector((state)=> state.jantes)   
  
 const displayJantes = () => {
        
        return Object.keys(jantesChoix).map(key => (
           
             
                <BoutonCardJantes key={jantesChoix[key].id} jantes={jantesChoix[key].imgCard} string={jantesChoix[key].string}/>
            
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
          <Button className="footer_boutonOption" href="./sellerie">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Sellerie</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Jantes;