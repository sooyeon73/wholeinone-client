import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { GlobalStyle } from "./components/common/GlobalStyle";
import Main from './pages/Main';
import FavoritesPage from './pages/FavoritesPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage'
import MyReserveListPage from './pages/MyReserveListPage';
import ReserveDetailPage from './pages/ReserveDetailPage';
import StoreDetailPage from './pages/StoreDetailPage';
import VisitedPage from './pages/VisitedPage';
import MyPaymentPage from './pages/MyPaymentPage';
function App() {

  
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
         <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/visited" component={VisitedPage} />
            <Route path="/search" component={SearchPage}/>
            <Route path="/myreserve" component={MyReserveListPage}/>
            <Route path="/payment" component={MyPaymentPage}/>

            <Route path="/reservedetail/:reservationIdx" component={ReserveDetailPage}/>
            <Route path="/stores/:storeIdx" component={StoreDetailPage}/>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
