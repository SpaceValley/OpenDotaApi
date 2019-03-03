import React from 'react';
import './heroesPage.css';
import Spinner from '../spinner/spinner'
import HeroesList from '../heroesList/HeroesList'
import {connect} from "react-redux";
import * as actions from "../../actions";


const HeroesPage  = ({ isLoading, hasData}) =>{

    const spinner = isLoading ? <Spinner/> : null;
    const content = hasData ? <HeroesList/> : "Sorry, data wasn't recieved";
        return (
            <div className='heroesPage'>
                {spinner}
                <div className="content text-white">
                {content}
                </div>
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
