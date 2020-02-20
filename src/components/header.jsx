import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils.js'
import { connect } from 'react-redux'
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";

import './header.sass'

const Header = ({ currentUser }) => (
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
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)
