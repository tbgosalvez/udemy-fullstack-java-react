import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService.js';

const HeaderComponent = props =>  {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand"><a href="#">Hallo.</a></div>
                <ul className="navbar-nav">
                    {AuthService.isLoggedIn() && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                    {AuthService.isLoggedIn() && <li><Link className="nav-link" to="/todos">Todo List</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!AuthService.isLoggedIn() && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {AuthService.isLoggedIn() && <li><Link className="nav-link" to="/logout" onClick={AuthService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    );
}

export default withRouter(HeaderComponent);