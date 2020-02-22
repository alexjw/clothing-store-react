import ACTION_CONSTANTS from "./action-constants";
import {addItemToCart} from "./utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_CONSTANTS.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ACTION_CONSTANTS.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case ACTION_CONSTANTS.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default cartReducer
