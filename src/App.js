import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { GlobalStyle } from "./components/common/GlobalStyle";
import Main from './pages/Main';
import FavoritesPage from './pages/FavoritesPage';


function App() {

  
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
         <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/favorites" component={FavoritesPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
