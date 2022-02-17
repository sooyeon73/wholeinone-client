import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import axios from "axios";
function PrivateRoute ({ component: Component, ...rest }) {
    const history= useHistory();
    return (
        <Route
            {...rest}
            render = {props => 
                axios.defaults.headers.common['Authorization'] ?
                
                (
                    <Component {...props} />
                ) : (
                    history.push('/login')
                )
            }
        />
    )
}

export default PrivateRoute;
 