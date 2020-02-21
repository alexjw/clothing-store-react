import React from "react";

import CustomButton from "./custom-button";
import { connect } from 'react-redux'

import './cart-dropdown.sass'
import CartItem from "./cart-item";
import { selectCartItems } from "../redux/selectors";

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => {
    return {cartItems: selectCartItems(state)}
};

export default connect(mapStateToProps)(CartDropdown)
