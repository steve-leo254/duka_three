import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Alpha App!</h1>
            <p>Please choose an option:</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                    <Link to="/login">Log In</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
