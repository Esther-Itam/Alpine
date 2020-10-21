import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";



const NextPage = (props) => {

    
    return(
   
    <Link to={props.nextPath} className="footer_boutonOption">
        <div className="footer_boutonContent">
        <span className="footer_boutonContentSpan">Option suivante: {props.nextPageName}</span>
        </div>
    </Link>
      
    );

}

export default NextPage;