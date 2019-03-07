import React from 'react';
import './HeroesPage.css';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import HeroesList from '../HeroesList/HeroesList';
import {connect} from "react-redux";
import * as actions from "../../actions";


const HeroesPage  = ({ isLoading, hasData}) =>{

    if(isLoading) return <Spinner/>;
    if(!hasData) return <Error/>;
        return (
            <div className='heroesPage'>
                <HeroesList/>
            </div>
        );
};

const mapStateToProps = (state) => {
    return {
        hasData: state.hasData,
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps, actions)(HeroesPage);
