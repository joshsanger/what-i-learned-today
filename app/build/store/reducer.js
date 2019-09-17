import * as actionTypes from './actions.js'

const initialState = {
    title: 'Delegate Spend Approval Authority',
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

export default reducer;