import React from "react";

import './checkout-item.sass'
import {connect} from "react-redux";
import {addItem, clearItemFromCart, decreaseItemFromCart} from "../redux/cart-actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, decreaseItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={ cartItem.imageUrl } alt='item' />
        </div>
        <span className='name'>{ cartItem.name }</span>
        <span className='quantity'>
            <div className='arrow' onClick={ () => decreaseItem(cartItem) }>&#10094;</div>
            <span className='value'>{ cartItem.quantity }</span>
            <div className='arrow' onClick={ () => addItem(cartItem) }>&#10095;</div>
        </span>
        <span className='price'>{ cartItem.price }</span>
        <div className='remove-button' onClick={ () => clearItem(cartItem) }>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => (
    {
        clearItem: item => dispatch(clearItemFromCart(item)),
        addItem: item => dispatch(addItem(item)),
        decreaseItem: item => dispatch(decreaseItemFromCart(item))
    }
);

export default connect(null, mapDispatchToProps)(CheckoutItem)
