import React from 'react';
import {useDispatch} from 'react-redux'
import poubelle from '../../images/poubelle.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';



const BoutonSelectionComponent = (props) => {

const [count, setCount]=useState(0);
const increment= setCount === 1;
const decrement= setCount === 0;
console.log(increment)
const theme='white';
const dispatch = useDispatch();
const choiceEquipementsPrice = () => {
    dispatch({type:"CHOICE_EQUIPEMENTS_PRICE", price: props.px, theme: 'blue'});
    }


    return (
     
        <div className="boutonSelection">
        <button style={{color:{theme}}} onClick={() => choiceEquipementsPrice()}  variant="link" className="version" className="text">
            Sélectionner
        </button>  
        <img  className="poubelle" src={poubelle} alt="" onClick={decrement}/>
        </div>  
                    
            
        );
    
     
       
}

export default BoutonSelectionComponent;