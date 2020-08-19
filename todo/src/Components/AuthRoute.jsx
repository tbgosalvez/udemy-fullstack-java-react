import React from 'react';
import AuthService from '../Services/AuthService';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = props => {
    if(AuthService.isLoggedIn())
        return <Route {...props} />
    else
        return <Redirect to="/login" />
}

export default AuthRoute;