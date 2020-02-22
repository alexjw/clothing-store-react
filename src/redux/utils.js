export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
    if(existingCartItem)
        return cartItems.map(item => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item)
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

export const decreaseItemOfCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(item => item.id === item.id);
    if(existingCartItem) {
        if(existingCartItem.quantity == 1) {
            return cartItems.filter(cartItem => cartItem.id !== item.id)
        }
        return cartItems.map( cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    }
};
