import * as actions from './constants/index'
export const fetchSuccess = (res) => ({ type: actions.HEROES_RECEIVE, payload: res});
export const fetchStart = () =>{
    console.log("fetch started");
    return dispatch => {
        dispatch({type: actions.HEROES_REQUEST});
        fetch('https://api.opendota.com/api/heroStats', {method: 'GET'})
            .then(res => res.json())
            .then (res => dispatch(fetchSuccess(res)));
    }
};
