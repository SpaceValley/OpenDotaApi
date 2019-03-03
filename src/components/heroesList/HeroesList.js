import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../actions";
import history from "../../history";



const HeroesList  = ({heroes}) =>{
    console.log(heroes);
    const backToLogIn = () =>{
        history.push('/');
    };

    return (
        <div>
                <h1 className="text-white">Heroes List</h1>
                <ul className='list-group'>
                    <li className="list-group-item text-primary">{heroes[0].localized_name}</li>
                </ul>
                <button className='btn btn-primary mt-3'
                        onClick={(e) => {
                            e.preventDefault();
                            backToLogIn();
                        }}>
                    Log Out
                </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    };
};

export default connect(mapStateToProps, actions)(HeroesList);
