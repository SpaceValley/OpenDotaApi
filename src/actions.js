
export const loginFieldUpdate = (newLogin) => ({type:'LOGIN_FIELD_UPDATE', payload: newLogin});
export const passFieldUpdate  = (newPass)  => ({type:'PASS_FIELD_UPDATE', payload: newPass});
export const loginUser = () => ({type: 'LOGIN_USER'});
export const createUser = () =>({type: 'CREATE_USER'});
export const backToLogIn = () =>({type: 'BACK_TO_LOGIN'});
export const createAccount = () =>({type: 'CREATE_ACCOUNT'});
export const fetchSuccess = (res) => ({ type: 'FETCH_SUCCESS', payload: res});
export const fetchStart = () =>{
    console.log("fetch started");
    return dispatch => {
        dispatch({type: 'FETCH_STARTED'});
        fetch('https://api.opendota.com/api/heroes', {method: 'GET'})
            .then(res => res.json())
            .then (res => dispatch(fetchSuccess(res)));
    }
};
