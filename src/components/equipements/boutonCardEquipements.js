import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';


const BoutonCardEquipements = (props) => {

   const dispatch = useDispatch();

    const choiceEquipements = () => {
        dispatch({type:"CHOICE_EQUIPEMENTS", equipements : props.name});
    }
    
    return (
      
        <Card >
                    <button  onClick={() => choiceEquipements()}>
                    <Card.Img variant="top" src={props.equipements} alt=""/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                    </button>
                </Card>
            
     
    );
}

export default BoutonCardEquipements;