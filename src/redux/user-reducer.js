import ACTION_CONSTANTS from "./action-constants";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_CONSTANTS.GOOGLE_SIGN_IN_SUCCESS:
        case ACTION_CONSTANTS.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case ACTION_CONSTANTS.GOOGLE_SIGN_IN_FAILURE:
        case ACTION_CONSTANTS.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
};

export default userReducer
