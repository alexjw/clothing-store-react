import React from "react";

import './cart-icon.sass'
import { ReactComponent as ShoppingIcon} from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/selectors";

import { toggleCartHidden } from "../redux/cart-actions";
import {createStructuredSelector} from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'  onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ itemCount }</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector(
    //{ itemCount: state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0 ) }
    { itemCount: selectCartItemsCount }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
