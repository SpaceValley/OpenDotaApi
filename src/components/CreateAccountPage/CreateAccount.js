import React from 'react';
import UsernameField from '../usernameField/UsernameField';
import PasswordField from '../passwordField/PasswordField';
import {connect} from 'react-redux';
import  * as actions from '../../actions';
import history from '../../history';

const CreateAccount = () =>{
    const createUser = () => {
        history.push('/');
    };
return (
    <form>
        <h1>Registration</h1>
        <label htmlFor="Username" className="mt-3">Create Username</label>
        <UsernameField />
        <label htmlFor="Password">Create Password</label>
        <PasswordField/>
        <div className='d-flex'>
            <button className='btn btn-primary' onClick={(e) => {
                e.preventDefault();
                createUser();
            }}>
                Sign Up
            </button>

        </div>
    </form>
);

};
const mapStateToProps = (state) => ({
    loginedSuccessfully: state.loginedSuccessfully,
});
export default connect(mapStateToProps,actions)(CreateAccount);