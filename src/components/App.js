import React from 'react';
import '../styles/App.sass'
import LoginPage from './LoginPage/LoginPage';
import HeroesPage from '../containers/HeroesPage/HeroesPage';
import CreateAccount from './CreateAccountPage/CreateAccount'
import {Router, Route} from 'react-router-dom';
import history from '../history';


const App = () => {
    return (
        <Router history={history}>
            <div className='mainPage'>
                <Route path='/' exact component={LoginPage}/>
                <Route path='/heroesPage/' component={HeroesPage}/>
                <Route path='/createAccount/' component={CreateAccount}/>
            </div>
        </Router>
    );
};

export default App;
