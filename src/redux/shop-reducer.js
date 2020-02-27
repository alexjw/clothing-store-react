import ACTION_CONSTANTS from "./action-constants";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_CONSTANTS.FETCH_START:
            return { ...state, isFetching: true };
        case ACTION_CONSTANTS.FETCH_SUCCESS:
            return { ...state, collections: action.payload, isFetching: false };
        case ACTION_CONSTANTS.FETCH_FAILURE:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state
    }
};

export default shopReducer
