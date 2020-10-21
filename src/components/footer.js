import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";




const FooterComponent = () => {
    const price = useSelector ((state) => state.price)
    const [count, setCount] =  useState(price);
    const paths = useSelector((state)=>state.paths)

return(
   <div className="footer_details">
            <span className="footer_price">Price: <Compteur/> euros</span>
            <span className="footer_split">/</span>
            <Link to={paths[6]} className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </Link>
        </div>
    );

}

export default FooterComponent;

