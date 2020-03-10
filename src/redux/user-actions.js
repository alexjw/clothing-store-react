import ACTION_CONSTANTS from "./action-constants";

export const setCurrentUser = user => ({
    type: ACTION_CONSTANTS.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: ACTION_CONSTANTS.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
    type: ACTION_CONSTANTS.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = (error) => ({
    type: ACTION_CONSTANTS.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: ACTION_CONSTANTS.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = (user) => ({
    type: ACTION_CONSTANTS.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = (error) => ({
    type: ACTION_CONSTANTS.EMAIL_SIGN_IN_FAILURE,
    payload: error
});
