import React from 'react';
import './app.css'
import LoginPage from '../loginPage/LoginPage';
import HeroesPage from '../heroesPage/HeroesPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
        return (
            <div className='mainPage'>
                <Router>
                    <>
                        <Route path='/' exact component={LoginPage}/>
                        <Route path='/heroesPage' component={HeroesPage}/>
                    </>
                </Router>
            </div>
        );
};

export default App;
