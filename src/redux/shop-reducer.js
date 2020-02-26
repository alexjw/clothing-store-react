import SHOP_DATA from "../pages/shopData";
import ACTION_CONSTANTS from "./action-constants";

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_CONSTANTS.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state
    }
};

export default shopReducer
