import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div id="login">
            <h2>Please login</h2>
            <Button varient="warning">Login with Google</Button>
        </div>
    );
};

export default Login;