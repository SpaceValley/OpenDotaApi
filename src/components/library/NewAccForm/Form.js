import React from 'react';
import {FormErrors} from './FormErrors';
import history from "../../../history";
import registeredUsers from '../../../login';

class Form extends React.Component {
    state = {
        users: registeredUsers.registeredUsers,
        username: '',
        password: '',
        formErrors: {username: '', password: ''},
        usernameValid: false,
        passwordValid: false,
        formValid: false,
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '' : ' is too short';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    };


    validateForm = () => {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
        console.log(`${this.state.username} & ${this.state.password}`);
    };


    errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
    };

    render() {

        const createAccount = () => {
            registeredUsers["registeredUsers"].push({
                "username": `${this.state.username}`,
                "password": `${this.state.password}`
            });
            console.log(registeredUsers);
            history.push('/');
        };
        return (
            <form>
                <h1 className="text-white text-center font-weight-light">Sign Up</h1>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>
                <div className={`form-group mb-0 ${this.errorClass(this.state.formErrors.username)}`}>
                    <label htmlFor="Username" className="mt-3 text-white h5 font-weight-normal">Username</label>
                    <input type="username"
                           required
                           className="form-control usernameInput"
                           name="username"
                           placeholder="Type Username"
                           value={this.state.username}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group mb-0 ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="Password" className="text-white h5 font-weight-normal">Password</label>
                    <input type="password"
                           required
                           className="form-control passwordInput"
                           name="password"
                           placeholder="Type Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}/>
                </div>
                <button type="submit"
                        className="btn btn-primary mt-2 loginBtn"
                        disabled={!this.state.formValid}
                        onClick={(e) => {
                            e.preventDefault();
                            createAccount();
                        }}>Add Account
                </button>
            </form>
        );
    }
}

export default Form;
