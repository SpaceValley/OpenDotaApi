import React from 'react';
import './HeroesList.css';
import {connect} from "react-redux";
import * as actions from "../../actions";
import history from "../../history";



const HeroesList  = ({heroes}) =>{
    console.log(heroes);
    const backToLogIn = () =>{
        history.push('/');
    };

    return (
        <div className="heroes-list">
             <button className='btn btn-primary logOut-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            backToLogIn();
                        }}>
                    Log Out
                </button>
                <h1 className="text-white text-center mb-5">Heroes List</h1>
                <ul className='list-group heroes-ul'>
                    {heroes.map((hero,i) => 
                    <li key={i} className="list-group-item mx-2 my-2 hero-li">
                        <img src={`http://api.opendota.com${hero.img}`} className="hero-img" alt={hero.localized_name}/>
                        <div className="hero-infoWrap">
                            <p className="hero-name">{hero.localized_name}</p>
                            <p className="hero-attack mt-2 mb-0">attack_type :</p>
                            <p className="hero-attack m-0">{hero.attack_type}</p>
                            <p className="hero-attack mt-2 mb-0">attack_rate :</p>
                            <p className="hero-attack m-0">{hero.attack_rate}</p>
                            <p className="hero-attack mt-2 mb-0">move_speed :</p>
                            <p className="hero-attack m-0">{hero.move_speed}</p>
                        </div>
                    </li>)}
                </ul>
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    };
};

export default connect(mapStateToProps, actions)(HeroesList);
