
export const fetchSuccess = (res) => ({ type: 'FETCH_SUCCESS', payload: res});
export const fetchStart = () =>{
    console.log("fetch started");
    return dispatch => {
        dispatch({type: 'FETCH_STARTED'});
        fetch('https://api.opendota.com/api/heroStats', {method: 'GET'})
            .then(res => res.json())
            .then (res => dispatch(fetchSuccess(res)));
    }
};
