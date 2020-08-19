import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeComponent = () => {
    return (
        <div className="container">
            <h1>Wilkommen!</h1>
            <p>You can manage your to-do list <Link to="/todos">here</Link>.</p>
        </div>
    );
}

export default WelcomeComponent;