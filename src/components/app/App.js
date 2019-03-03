import React from 'react';
import './app.css'
import LoginPage from '../loginPage/LoginPage';
import HeroesPage from '../heroesPage/HeroesPage';
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
