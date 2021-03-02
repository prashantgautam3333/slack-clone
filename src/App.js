import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>
      <div>
        

        <Switch>
         
          <Route path="/" exact>
           <Header/>
            
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
