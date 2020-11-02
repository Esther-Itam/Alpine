import React from 'react';
import '../../App.css';
import BoutonCarousel from './boutonCarousel';
import FooterComponent from '../footer';
import { useSelector } from 'react-redux';
import NavComponent from './nav';
import NextPage from '../nextPage';



 const Version = () => {
   
    const page = useSelector((state)=>state.page) 
    const paths = useSelector((state)=>state.paths) 
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
              <NextPage
                nextPath={paths[1]}
                nextPageName={page[2]}
              />
          </div>
    </div>
  );
}
export default Version;
 
 
 