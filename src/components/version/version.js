import React from 'react';
import '../../App.css';
import BoutonCarousel from './boutonCarousel';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavComponent from './nav';


 const Version = () => {
   
    const version = useSelector((state) => state.version)
    
    const displayVersion = () => {
        
        return Object.keys(version).map(key => 
             
        (
       
        <BoutonCarousel key={version[key].id} version={version[key].img } name={version[key].name} px={version[key].px}  />
 
        ));
      }
    
  return (
    <div >
        <div>
          <div className="boxBoutonCarousel">
              {displayVersion()}
              <NavComponent/>
          </div>
        </div>
          <div className="footer">
              <FooterComponent/>
              <Link to="./couleurs" className="footer_boutonOption" >
              <div className="footer_boutonContent">
                <span className="footer_boutonContentSpan">Option suivante: Couleurs</span>
              </div>
              </Link>
          </div>
    </div>
  );
}

export default Version;
 
 
 