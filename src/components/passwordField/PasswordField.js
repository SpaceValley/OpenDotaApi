import React from 'react';
import './passwordField.css';
import {connect} from 'react-redux';
import * as actions from '../../actions';


const PasswordField = ({event, currPass, passFieldUpdate}) => {
    console.log(currPass);
    return (
        <>
            <input type="password"
                   placeholder='Type password'
                   className='form-control passwordInput'
                   onChange={event => passFieldUpdate(event.target.value)}
                   required/>
        </>

    );
};


const mapStateToProps = (state) => ({currPass: state.currPass});
export default connect(mapStateToProps, actions)(PasswordField);
