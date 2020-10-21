import React from 'react';
import {useDispatch} from 'react-redux'



const BoutonSelectionComponent = (props) => {

    const dispatch = useDispatch();
    const choicePrice = () => {
        dispatch({type:"CHOICE_EQUIPEMENTS_PRICE", mediaVue: props.name});
       
    }
    
    
    return (
     
                <button onClick={()=>choicePrice()}  variant="link" className="text">
                    Sélectionner
                </button>  
                    
            
        );
    
     
       
}

export default BoutonSelectionComponent;