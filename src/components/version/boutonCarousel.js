import React from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'



const BoutonCarousel = (props) => {
   //const  versions= useSelector((state)=> state.version)
   const dispatch = useDispatch();
    const choiceVersion = () => {
        dispatch({type:"CHOICE_VERSION", version: props.name});
       
    }
    
    
    return (
     <div className="boutonCarousel">   
                
           <div className="row" className="container">
               
                
                <img
                    className="imageVersion"
                    src={props.version} 
                    alt="First slide"
                /> 
                <div class="middle">
                <button onClick={()=>choiceVersion()}  variant="link" className="version" className="text">
                    Sélectionner
                </button>  
                </div>                
               
            </div>
           
            <div>   
                  <h3 >{props.name}</h3>
                  <h4 >{props.px} €</h4>
            </div>  
    </div>      
            
        );
    
     
       
}

export default BoutonCarousel;