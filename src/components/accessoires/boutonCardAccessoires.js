import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';


const BoutonCardAccessoires = (props) => {

   const dispatch = useDispatch();

    const choiceAccessoires = () => {
        dispatch({type:"CHOICE_ACCESSOIRES", accessoires : props.name});
    }
    
    return (
      
        <Card >
                    <button  onClick={() => choiceAccessoires()}>
                    <Card.Img variant="top" src={props.accessoires} alt=""/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                    </button>
                </Card>
            
     
    );
}

export default BoutonCardAccessoires;