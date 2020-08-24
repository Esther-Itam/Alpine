import React, { Component } from 'react';
import '../App.css';
import BoutonCarousel from './boutonCarrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';



class Version extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <BoutonCarousel/>

        </div>
      </div>
    );
  }
}

export default Version;