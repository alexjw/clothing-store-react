import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import { selectCartHidden } from "../redux/selectors";
import { selectCurrentUser } from "../redux/selectors";

import './header.sass'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/shop' className='option'>Contact</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { !hidden ? <CartDropdown/> : null }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)
