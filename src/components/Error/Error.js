import React from 'react';
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


export default Error;
