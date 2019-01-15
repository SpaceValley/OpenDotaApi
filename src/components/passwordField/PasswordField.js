import React from 'react';
import './passwordField.css';

const PasswordField = () =>{
    return(
        <div>
            <label htmlFor="Password">Password</label>
            <input type="password"
                   placeholder='Type password'
                   className='form-control passwordInput'
                   onChange={event =>(event.target.value)}
                   required
                   pattern="[A-Za-z0-9_-.]{6,20}"
            />
        </div>
    );
};
export default PasswordField;