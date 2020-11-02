import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Jantes from './components/jantes/jantes';
import Version from './components/version/version';
import Sellerie from './components/sellerie/sellerie';
import Equipements from './components/equipements/equipements';
import Accessoires from './components/accessoires/accessoires';
import Couleurs from './components/couleurs/couleurs';
import Recapitulatif from './components/recapitulatif';


const  App = () => {
 
   return (
     
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/">
              <Version />
            </Route>

            <Route path="/couleurs">
              <Couleurs />
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
              <Accessoires/>
            </Route>

            <Route path="/recapitulatif">
              <Recapitulatif/>
            </Route>
            
          </Switch>
        </div>
      </Router>
      
      
    );
  
}

export default App;