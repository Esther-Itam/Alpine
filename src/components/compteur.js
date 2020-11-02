import React from 'react';
import {useDispatch} from 'react-redux'



const CompteurComponent = (props) => {
   //const  versions= useSelector((state)=> state.version)
   const dispatch = useDispatch();
    const choicePersonnalisation = () => {
        dispatch({type:"CHOICE_PRICE", version: props.name});
       
    }
    
    
    return (
     
                <button onClick={()=>choicePersonnalisation()}  variant="link" className="version" className="text">
                    Sélectionner
                </button>  
                    
            
        );
    
     
       
}

export default CompteurComponent;