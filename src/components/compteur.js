import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";




const CompteurComponent = () => {
    const price = useSelector ((state) => state.price)
    const [count, setCount] =  useState(price);
    const paths = useSelector((state)=>state.paths)

return(
        <div>

            
        </div>
    );

}

export default CompteurComponent;

