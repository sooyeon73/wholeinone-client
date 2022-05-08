import React,{useEffect,useState} from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import axios from "axios";

function PrivateRoute ({ component: Component, ...rest }) {
    const history= useHistory();
    axios.post('/users/refresh').then(response => {
      if(response.data.isSuccess){
      }
      else if(response.data.code==403){ //사장님 계정인 경우
              axios.post('/users/logout').then(response => {
                console.log(response);
                alert("로그아웃 되었습니다.");
                history.push('/login');
                window.location.reload();
                });
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
 