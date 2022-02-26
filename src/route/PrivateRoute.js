import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import axios from "axios";
function PrivateRoute ({location,component: Component, ...rest }) {
    const history= useHistory();
    console.log("private route location : ",location);
    var isAuthenticated=false;
    //authenticated 인자가 없는 경우 (로그인 페이지를 통해서 로그인하지 않은 경우)
    if (!location.state?.authenticated){
        isAuthenticated = false;
    }
    
    //authenticated가 true인 경우 (로그인 페이지를 통해서 로그인한 경우)
    else if (location.state.authenticated){
        isAuthenticated = true;
    }
    return (
        <Route
            {...rest}
            render = {props => 
                isAuthenticated ?
                
                (
                    <Component {...props} />
                ) : ( 
                    <Redirect
                        to={{ pathname: "/login",
                              state: { 
                                from: props.location, 
                                authenticated : false
                            } }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;
 