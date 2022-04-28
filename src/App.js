import React, {useState, useEffect, useCallback } from 'react';
import { useHistory, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import PrivateRoute from './route/PrivateRoute';
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
import ReservationPage from './pages/ReservationPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PayPage from './pages/PayPage';
import ReviewPage from './pages/ReviewPage';
import onSilentRefresh from './components/LoginMenu/index';
import MyCouponPage from './pages/MyCouponPage';

function App() {

  
return (
    <Router>
      <div className="App">
        <GlobalStyle />
         <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />

           <PrivateRoute path="/mypage" component={MyPage} />
           <Route path="/mycoupon" component={MyCouponPage} />

            <PrivateRoute path="/favorites" component={FavoritesPage} />
            <Route path="/visited" component={VisitedPage} />
            <Route path="/search" component={SearchPage}/>
            
            <PrivateRoute path="/myreserve" component={MyReserveListPage}/>
            <PrivateRoute path="/payment" component={MyPaymentPage}/>
            <PrivateRoute path="/storeReservation/:storeIdx" component={ReservationPage}/>

            <PrivateRoute path="/reservedetail/:reservationIdx" component={ReserveDetailPage}/>
            <Route path="/stores/:storeIdx" component={StoreDetailPage}/>
            <PrivateRoute path="/pay" component={PayPage}/>
            <PrivateRoute path="/review/:reservationIdx" component={ReviewPage}/>


          </Switch>
      </div>
    </Router>
  );
}

export default App;
