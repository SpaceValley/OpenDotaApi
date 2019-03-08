import React from 'react';
import './HeroesList.css';
import {connect} from "react-redux";
import * as actions from "../../actions";
import history from "../../history";


const HeroesList = ({heroes}) => {
    console.log(heroes);
    const backToLogIn = () => {
        history.push('/');
    };

    return (
        <div className="heroes-list">
            <button className='btn btn-dark logOut-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        backToLogIn();
                    }}>
                Log Out
            </button>
            <h1 className="text-white text-center mb-5">Heroes List</h1>
            <ul className='list-group heroes-ul'>
                {heroes.map((hero, i) =>
                    <li key={i} className="list-group-item mx-2 my-2 hero-li">
                            <img src={`http://api.opendota.com${hero.img}`} className="hero-img"
                                 alt={hero.localized_name}/>
                            <div>
                                <p className="hero-name text-center mt-2">{hero.localized_name}</p>
                                <p className="hero-attack text-center my-2">{hero.attack_type}</p>
                            </div>

                        <div className="hero-infoWrap">
                            <div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_int.png"
                                         alt="int"/>
                                    <span className="hero-stat">{hero.base_int} + {hero.int_gain}</span>
                                </div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_agi.png"
                                         alt="agi"/>
                                    <span className="hero-stat">{hero.base_agi} + {hero.agi_gain}</span>
                                </div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_str.png"
                                         alt="str"/>
                                    <span className="hero-stat">{hero.base_str} + {hero.str_gain}</span>
                                </div>
                            </div>
                            <div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_attack.png"
                                         alt="attack"/>
                                    <span
                                        className="hero-stat">{hero.base_attack_min} - {hero.base_attack_max}</span>
                                </div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_speed.png"
                                         alt="speed"/>
                                    <span className="hero-stat">{hero.move_speed}</span>
                                </div>
                                <div className="stat-wrap">
                                    <img src="http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_defense.png"
                                         alt="defense"/>
                                    <span className="hero-stat mr-4">{hero.base_armor}</span>
                                </div>
                            </div>
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
