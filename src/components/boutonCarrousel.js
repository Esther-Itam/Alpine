
import React from 'react';
import {Carousel} from 'react-bootstrap';
import legende from '../images/configurateur/modele/selection/legende.png'
import pure from '../images/configurateur/modele/selection/pure.png';
/* import { connect, useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'; */
 import NavComponent from './nav';




const BoutonCarousel = (props) => {

/*   const dispatch = useDispatch()
  const choice = ()=> dispatch({type: "CHOICE", payload: props.versions.id})
  const versions = useSelector((state)=> props.state.versions)

  console.log(props.state.versions); */

return(
    <div className="box">
     <Carousel className="carousel">
        <Carousel.Item>
           <img
            className="d-block w-100"
             src={legende} 
            alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={pure}
            alt="Third slide"
            />


        </Carousel.Item>

        </Carousel>
        <NavComponent/>
    </div>    
)

}

export default BoutonCarousel;