import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';
import Form from '../Form/Form';
import './LoginPage.css';

const LoginPage = () => {
    const register = () => {
        history.push('/createAccount/');
    };
    return (
        <div className='loginPage'>
            <Form/>
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
const mapStateToProps = (state) => ({
   ...state
});
export default connect(mapStateToProps, actions)(LoginPage);

