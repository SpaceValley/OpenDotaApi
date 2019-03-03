import React from 'react';
import UsernameField from '../usernameField/UsernameField'
import PasswordField from '../passwordField/PasswordField'
import './loginPage.css';
import {connect} from 'react-redux';
import  * as actions from '../../actions'
import history from '../../history'


const LoginPage = ({loginUser, fetchStart, loginTitle}) => {
     const createAccount = () =>{
         history.push('/createAccount/');
     };
        return (
            <form>
                <h1 className="loginTitle">{loginTitle}</h1>
                <label htmlFor="Username" className="mt-3 text-white">Username</label>
                <UsernameField/>
                <label htmlFor="Password" className="text-white">Password</label>
                <PasswordField/>
                <div className='d-flex flex-column'>
                    <button className='btn btn-primary loginBtn' onClick={(e) => {
                        e.preventDefault();
                        loginUser();
                        fetchStart();
                    }}>
                        Log In
                    </button>
                        <div className='mt-3 text-white'>Do not have account yet?</div>
                    <button className='btn btn-primary mt-2' onClick={(e) => {
                            e.preventDefault();
                            createAccount();
                    }}>
                        Create Account</button>
                </div>
            </form>
        );

};
const mapStateToProps = (state) => ({
    loginedSuccessfully: state.loginedSuccessfully,
    matchingUsers : state.matchingUsers,
    currLogin: state.currLogin,
    currPass: state.currPass,
    loginTitle : state.loginTitle
});
export default connect(mapStateToProps, actions)(LoginPage);

