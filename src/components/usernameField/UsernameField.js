import React from 'react';
import './usernameField.css';
import {connect} from 'react-redux';
import  * as actions from '/./actions'



const UsernameField = ({event}) =>{
    return(
        <div>
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder='Type username'
               className='form-control usernameInput'
               onChange={event =>(event.target.value)}
               required
               value={event}
               pattern="\w+"
        />
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        counter: state
    }
};
export default connect(mapStateToProps,actions)(UsernameField);