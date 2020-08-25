import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import Jantes from './components/jantes';
import Version from './components/version';
import Sellerie from './components/sellerie';
import Equipements from './components/equipement';
import Accessoires from './components/accessoires';
import Couleur from './components/couleur';


const  App = () => {
 
   return (

      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/">
            <Version />
          </Route>
          <Route exact path="/couleur">
            <Couleur/>
          </Route>
          <Route path="/jantes">
            <Jantes />
          </Route>
          <Route path="/sellerie">
            <Sellerie />
          </Route>
          <Route path="/equipements">
            <Equipements />
          </Route>
          <Route path="/accessoires">
            <Accessoires />
          </Route>

        </Switch>

        </div>
      </Router>


    );

}

export default App;