import ACTION_CONSTANTS from "./action-constants";

export const toggleCartHidden = () => ({
    type: ACTION_CONSTANTS.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: ACTION_CONSTANTS.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => (
    {
        type: ACTION_CONSTANTS.REMOVE_ITEM_FROM_CART,
        payload: item
    }
)
