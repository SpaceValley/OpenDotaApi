
const initialState = {
    isLoading: false,
    hasData: false,
    heroes: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
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
