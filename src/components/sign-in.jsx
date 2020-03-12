import React, {useState} from "react";

import './sign-in.sass'

import FormInput from "./form-input";
import CustomButton from "./custom-button";
import {emailSignInStart, googleSignInStart} from "../redux/user-actions";
import {connect} from "react-redux";

const SignIn = (props) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: ''});

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = userCredentials;
        props.emailSignInStart(email, password);

        /*try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (e) {

        }*/ // deprecated
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials,  [name]: value })
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput name='email' type='email' value={ userCredentials.email } handleChange={ handleChange } label='email' required/>
                <FormInput name='password' type='password' value={ userCredentials.password } handleChange={ handleChange } label='password' required/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={ props.googleSignInStart } extraClassName='google-sign-in'>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn)
