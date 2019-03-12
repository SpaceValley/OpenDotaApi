import * as actions from './constants/index'

const initialState = {
    isLoading: false,
    hasData: false,
    heroes: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HEROES_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.HEROES_RECEIVE:
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
