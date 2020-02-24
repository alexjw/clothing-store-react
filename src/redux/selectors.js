import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
};

const selectCart = state => state.cart;

export const selectUser = state => state.user;

const selectDirectory = state => state.directory;

const selectShop = state => state.shop;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((sum, item) => sum + item.quantity, 0));

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0));

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionId = collectionUrlParam =>
    createSelector([selectCollections], collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]));
