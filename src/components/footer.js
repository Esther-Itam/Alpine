import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Link} from "react-router-dom";




const FooterComponent = (props) => {
    const price = useSelector ((state) => state.price)
    const paths = useSelector((state)=>state.paths)
         
    

return(
   <div className="footer_details">
            <span className="footer_price">Price: {price} euros</span>
            <span className="footer_split">/</span>
            <Link to={paths[6]} className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </Link>
        </div>
    );

}

export default FooterComponent;

