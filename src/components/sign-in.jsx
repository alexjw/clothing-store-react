import React from "react";

import './sign-in.sass'

import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { SignInWithGoogle, auth } from "../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (e) {

        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    };

    render = () => (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ this.handleSubmit }>
                <FormInput name='email' type='email' value={ this.state.email } handleChange={ this.handleChange } label='email' required/>
                <FormInput name='password' type='password' value={ this.state.password } handleChange={ this.handleChange } label='password' required/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={ SignInWithGoogle } extraClassName='google-sign-in'>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    )

}

export default SignIn
