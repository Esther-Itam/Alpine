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
                
           <div className="row" className="boutonCarouselImg">
               
                <Button onClick={()=>choiceVersion()}  variant="link" className="version">
                <img
                    className="d-block w-100 m-50"
                    src={props.version} 
                    alt="First slide"
                />                
                </Button>  
            </div>
           
            <div>   
                  <h3 >{props.name}</h3>
                  <h4 >{props.px} €</h4>
            </div>  
    </div>      
            
        );
    
     
       
}

export default BoutonCarousel;