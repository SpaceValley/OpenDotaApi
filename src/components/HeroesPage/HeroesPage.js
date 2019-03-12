import React from 'react';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import HeroesList from '../../containers/HeroesList/HeroesList';



const HeroesPage  = ({ isLoading, hasData}) =>{

    if(isLoading) return <Spinner/>;
    if(!hasData) return <Error/>;
        return (
            <div className='heroesPage'>
                <HeroesList/>
            </div>
        );
};

export default HeroesPage;
