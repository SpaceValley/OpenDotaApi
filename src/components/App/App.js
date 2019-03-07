import React from 'react';
import './App.css'
import LoginPage from '../LoginPage/LoginPage';
import HeroesPage from '../HeroesPage/HeroesPage';
import CreateAccount from '../CreateAccountPage/CreateAccount'
import {Router, Route} from 'react-router-dom';
import history from '../../history';

const App = () => {
        return (
            <div className='mainPage'>
                <Router history = {history}>
                    <>
                        <Route path='/' exact component={LoginPage}/>
                        <Route path='/heroesPage/' component={HeroesPage}/>
                        <Route path='/createAccount/' component={CreateAccount}/>
                    </>
                </Router>
            </div>
        );
};

export default App;
