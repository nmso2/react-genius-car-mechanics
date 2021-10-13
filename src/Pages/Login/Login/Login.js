import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { logInWithGoogle } = useAuth();
    return (
        <div id="login">
            <h2>Please login</h2>
            <Button variant="warning" onClick={logInWithGoogle}>Login With Google</Button>
        </div>
    );
};

export default Login;