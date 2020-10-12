import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';



const BoutonCardJantes = (props) => {

   const dispatch = useDispatch();

    const choiceJantes = () => {
        dispatch({type:"CHOICE_JANTES", jantes : props.name});
    }
    
    return (
      
        <Card >
                    <button  onClick={() => choiceJantes()}>
                    <Card.Img variant="top" src={props.jantes} alt=""/>
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