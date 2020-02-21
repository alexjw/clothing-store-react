import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((sum, item) => sum + item.quantity, 0));

export const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);