import React from 'react';
import history from '../../history';
import Form  from '../../containers/Form/Form';

const LoginPage = () => {
    const register = () => {
        history.push('/createAccount/');
    };
    return (
        <div className='loginPage'>
            <Form />
            <div className='mt-3 text-white'>Do not have account yet?</div>
            <button className='btn btn-primary mt-2 createAccBtn' onClick={(e) => {
                e.preventDefault();
                register();
            }}>
                Create Account
            </button>
        </div>
    );

};
export default LoginPage;

