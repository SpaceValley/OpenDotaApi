import React from 'react';
import UsernameField from '../usernameField/UsernameField'
import PasswordField from '../passwordField/PasswordField'
import './loginPage.css';
import { Redirect } from 'react-router-dom';


const LoginPage = () => {
        return (
            <form>
                <h1>Please Log In</h1>
                <UsernameField/>
                <PasswordField/>
                <button className='btn btn-primary'
                        onClick={}>
                    Log In
                </button>
            </form>
        );
    };
export default LoginPage;

