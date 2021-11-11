import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { GlobalStyle } from "./components/common/GlobalStyle";
import Main from './pages/Main';
import FavoritesPage from './pages/FavoritesPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage'


function App() {

  
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
         <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/search" component={SearchPage}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
