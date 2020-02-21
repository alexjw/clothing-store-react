import ACTION_CONSTANTS from "./action-constants";

export const setCurrentUser = user => ({
    type: ACTION_CONSTANTS.SET_CURRENT_USER,
    payload: user
});
