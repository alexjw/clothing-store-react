import React, {useState} from "react";

import './sign-up.sass'

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import {signUpStart} from "../redux/user-actions";
import {connect} from "react-redux";

const SignUp = (props) => {

    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        if(password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        props.signUpStart({ displayName, email, password });

        /*try {
            const userAuth = (await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)).user;

            await createUserProfileDocument(userAuth, { displayName })

            this.state = { displayName: '', email: '', password: '', confirmPassword: '' }
        } catch (e) {
            console.error(e)
        }*/ // deprecated to saga
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={ handleSubmit }>
                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
                <FormInput type='text' name='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => {

    return {signUpStart: userCredentials => dispatch(signUpStart(userCredentials))}
};

export default connect(null, mapDispatchToProps)(SignUp)
