import React from "react";

import CustomButton from "./custom-button";
import { connect } from 'react-redux'

import './cart-dropdown.sass'
import CartItem from "./cart-item";
import { selectCartItems } from "../redux/selectors";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../redux/cart-actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length  ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={ () => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        } }>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => {
    return {cartItems: selectCartItems(state)}
};

// If you don't declare mapDispatchToProps on connect, connect passes mapDispatchToProps as prop

export default withRouter(connect(mapStateToProps)(CartDropdown))
