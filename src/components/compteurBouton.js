import React, { Component } from 'react';


const Count = () => {

    const dispatch = useDispatch();
    const addAction = () => {dispatch({type:"ADD"});}
    const removeAction = () => {dispatch({type:"REMOVE"});}

    return (
            <div>
                <button onClick={()=>addAction()}  variant="link" className="version" className="text">
                    Sélectionner
                </button>  
                <button onClick={()=>removeAction()}  variant="link" className="version" className="text">
                    Supoprimer
                </button>                    
            </div>
        );
}
 
export default Count;
