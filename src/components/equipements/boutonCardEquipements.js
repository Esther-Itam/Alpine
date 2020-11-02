import React from 'react';
import {useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';



const BoutonCardEquipements = (props) => {

   const increment= useSelector((state)=> state.increment)
   const [count, setCount] = useState(0);

   const dispatch = useDispatch();
   const choiceEquipements = () => {
        dispatch({type:"CHOICE_EQUIPEMENTS", equipements : props.name});}
       

    
    return (
      
        <Card >
                    <button  onClick={() => choiceEquipements()}>
                    <Card.Img variant="top" src={props.equipements} alt=""/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>Nombre d'options:{count.length}</Card.Subtitle>
                    </Card.Body>
                    </button>
                </Card>
            
     
    );
}

export default BoutonCardEquipements;