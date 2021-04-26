import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProivder';

function Login() {

    const [{ user }, dispatch] = useStateValue();

    const signIn = e => {
        // Sign in..
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result=> {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src = "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt = ""               
                    />
                    <img
                    src = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt = ""               
                    /> 
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
