import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";
function PrivateRoute ({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props => 
                axios.defaults.headers.common['Authorization'] ?
                
                (
                    <Component {...props} />
                ) : ( 
                    <Redirect to={{
                                    pathname: '/login', 
                                    state: {from: props.location}
                                  }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;
 