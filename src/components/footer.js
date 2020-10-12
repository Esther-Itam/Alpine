/* import React from 'react';




const FooterComponent = () => {


return(
    
        <div className="footer_details">           
            <span className="footer_price">Price: 33 333 euros</span>
            <span className="footer_split">/</span>
            <button className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </button>
        </div>    
            
 

    );
  
}

export default FooterComponent; */

import React from 'react';
import { useSelector } from 'react-redux';




const FooterComponent = () => {
    const version = useSelector ((state) => state.version)


return(
   <div className="footer_details">
            <span className="footer_price">Price: {version[1].px} euros</span>
            <span className="footer_split">/</span>
            <button className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </button>
        </div>
    );

}

export default FooterComponent;