import registeredUsers from './login';
import history from './history';


const initialState = {
    users: registeredUsers.registeredUsers,
    currLogin: '',
    currPass: '',
    loginedSuccessfully: false,
    matchingUsers: 0,
    loginTitle: 'Please Log In',
    isLoading: false,
    hasData: false,
    heroes: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FIELD_UPDATE':
            return {
                ...state,
                currLogin: action.payload
            };
        case 'PASS_FIELD_UPDATE':
            return {
                ...state,
                currPass: action.payload
            };
        case 'LOGIN_USER':
            const matchingUsers = state.users.filter((user) =>
                user.username === state.currLogin &&
                user.password === state.currPass
            );
            console.log(matchingUsers.length);
            if (matchingUsers.length === 0) {
                state.loginTitle = 'Failed to Log In, please try again';
            } else {
                state.loginTitle = 'Please Log In';
                history.push('/heroesPage/');
            }


            return {
                ...state,
                loginedSuccessfully: matchingUsers.length > 0,
                isLoading: true
            };
        case 'CREATE_USER':
            registeredUsers["registeredUsers"].push({
                "username": `${state.currLogin}`,
                "password": `${state.currPass}`
            });
            return {
                ...state,
                currLogin: action.payload,
                currPass: action.payload,
                registeredUsers
            };
        case 'CREATE_ACCOUNT':
            return {
                users: registeredUsers.registeredUsers,
                currLogin: '',
                currPass: '',
                loginedSuccessfully: false,
                matchingUsers: 0,
                loginTitle: 'Please Log In'
            };
        case 'BACK_TO_LOGIN':
            return {
                users: registeredUsers.registeredUsers,
                currLogin: '',
                currPass: '',
                loginedSuccessfully: false,
                matchingUsers: 0,
                loginTitle: 'Please Log In'
            };
        case 'FETCH_STARTED':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                heroes: action.payload,
                hasData: true,
                isLoading: false
            };
        default :
            return state;
    }
};

export default reducer;
