import React from "react";

import './sign-up.sass'

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import {signUpStart} from "../redux/user-actions";
import {connect} from "react-redux";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = { displayName: '', email: '', password: '', confirmPassword: '' }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if(this.state.password !== this.state.confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        this.props.signUpStart({ displayName, email, password });

        /*try {
            const userAuth = (await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)).user;

            await createUserProfileDocument(userAuth, { displayName })

            this.state = { displayName: '', email: '', password: '', confirmPassword: '' }
        } catch (e) {
            console.error(e)
        }*/ // deprecated to saga
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render = () => (
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required />
                <FormInput type='text' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required />
                <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {

    return {signUpStart: userCredentials => dispatch(signUpStart(userCredentials))}
};

export default connect(null, mapDispatchToProps)(SignUp)
