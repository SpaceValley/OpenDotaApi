import React from 'react';
import './Error.css';
import {connect} from "react-redux";
import * as actions from "../../actions";
import history from "../../history";



const Error = () =>{
    const backToLogIn = () =>{
        history.push('/');
    };

    return (
        <div className="error">
                <h1 className="text-white text-center mb-5">Sorry, some Error occured<br/>Try to LogIn again</h1>
                <button className='btn btn-primary'
                        onClick={(e) => {
                            e.preventDefault();
                            backToLogIn();
                        }}>
                    Home
                </button>
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, actions)(Error);
