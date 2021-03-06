import ACTION_CONSTANTS from "./action-constants";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_CONSTANTS.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case ACTION_CONSTANTS.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case ACTION_CONSTANTS.SIGN_IN_FAILURE:
        case ACTION_CONSTANTS.SIGN_OUT_FAILURE:
        case ACTION_CONSTANTS.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
};

export default userReducer
