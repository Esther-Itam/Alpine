import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';


const BoutonCardSellerie = (props) => {

   const dispatch = useDispatch();

    const choiceSellerie = () => {
        dispatch({type:"CHOICE_SELLERIE", sellerie : props.name});
    }
    
    return (
      
        <Card >
                    <button  onClick={() => choiceSellerie()}>
                    <Card.Img variant="top" src={props.sellerie} alt=""/>
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

export default BoutonCardSellerie;