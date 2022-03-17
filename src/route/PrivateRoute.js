import React,{useEffect,useState} from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import axios from "axios";

function PrivateRoute ({ component: Component, ...rest }) {
    const history= useHistory();
    axios.post('/users/refresh').then(response => {
      if(response.data.isSuccess){
      }
      else{

                history.replace("/login");
      }
  });


  

    return (
        <Route
            {...rest}
            render = {props => 
                
                (
                    <Component {...props} />
                )
            }
        />
    )
}

export default PrivateRoute;
 