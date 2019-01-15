import React from 'react';
import './heroesPage.css';
import { Redirect } from 'react-router-dom';

const backToLogIn = () =>{
    return <Redirect to='/'/>;
};

const HeroesPage = () =>{

    return (
        <div className='heroesPage'>
            <h1>Heroes List</h1>
            <ul className='list-group'>
                <li className="list-group-item">Hero 1</li>
                <li className="list-group-item">Hero 2</li>
                <li className="list-group-item">Hero 3</li>
            </ul>
                <button className='btn btn-primary mt-3'
                onClick={backToLogIn}>
                Back To Log In</button>
        </div>
    );
};
export default HeroesPage;

