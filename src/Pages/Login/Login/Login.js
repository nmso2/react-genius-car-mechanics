import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { logInWithGoogle, setIsLoading, setError } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    return (
        <div id="login">
            <h2>Please login</h2>
            <Button variant="warning" onClick={handleGoogleLogIn}>Login With Google</Button>
        </div>
    );
};

export default Login;