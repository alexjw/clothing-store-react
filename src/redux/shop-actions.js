import ACTION_CONSTANTS from "./action-constants";

export const updateCollections = collectionsMap => ({
    type: ACTION_CONSTANTS.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
