import React from 'react';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux'





const BoutonCardColor = (props) => {
    const version = useSelector ((state)=>state.version)
    const dispatch = useDispatch();

    const choiceColor = () => {
        dispatch({type:"CHOICE_COLOR", color : props.name, version:props.nameVersion});
    }
    console.log (props.string)

 return (
       
            <Card >
            <button  onClick={() => choiceColor()} >
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