import ACTION_CONSTANTS from "./action-constants";

export const setCurrentUser = user => ({
    type: ACTION_CONSTANTS.SET_CURRENT_USER,
    payload: user
});

export const signInSuccess = user => ({
    type: ACTION_CONSTANTS.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: ACTION_CONSTANTS.SIGN_IN_FAILURE,
    payload: error
});

export const signOutStart = () => ({
    type: ACTION_CONSTANTS.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: ACTION_CONSTANTS.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: ACTION_CONSTANTS.SIGN_OUT_FAILURE,
    payload: error
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

export const checkUserSession = () => (
    { type: ACTION_CONSTANTS.CHECK_USER_SESSION }
);

export const signUpStart = (userCredentials) => (
    { type: ACTION_CONSTANTS.SIGN_UP_START, payload: userCredentials}
);

export const signUpSuccess = ({ user, additionalData }) => (
    { type: ACTION_CONSTANTS.SIGN_UP_SUCCESS, payload: { user, additionalData } }
);

export const signUpFailure = (error) => (
    { type: ACTION_CONSTANTS.SIGN_UP_FAILURE, payload: error }
);
