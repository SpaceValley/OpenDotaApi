import React from 'react';
import './usernameField.css';
import {connect} from 'react-redux';
import * as actions from '../../actions'


const UsernameField = ({event, currLogin, loginFieldUpdate}) => {
    console.log(currLogin);
    return (
        <>
            <input type="text"
                   placeholder='Type username'
                   className='form-control usernameInput'
                   onChange={event => loginFieldUpdate(event.target.value)}
                   required
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    currLogin: state.currLogin,
});

export default connect(mapStateToProps, actions)(UsernameField);
