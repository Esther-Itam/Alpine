import React from 'react';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'





const BoutonCardColor = (props) => {
    const dispatch = useDispatch();

    const choiceColor = () => {
        dispatch({type:"CHOICE_COLOR", color : props.name});
    }

 return (
       
            <Card >
            <button  onClick={() => choiceColor()} variant="link">
                <Card.Img variant="top" src={props.couleurs} alt=""/>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.px} €
                </Card.Text>
                </Card.Body>
            </button>
            </Card>
   
    )
}
export default BoutonCardColor;