import React from "react";

import './sign-in.sass'

import FormInput from "./form-input";
import CustomButton from "./custom-button";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
    };

    handleChange = event => {
        const { value, name } = event.target;

        console.log(name + ": " + value)

        this.setState({ [name]: value })
    };

    render = () => (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ this.handleSubmit }>
                <FormInput name='email' type='email' value={ this.state.email } handleChange={ this.handleChange } label='email' required/>
                <FormInput name='password' type='password' value={ this.state.password } handleChange={ this.handleChange } label='password' required/>
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
    )

}

export default SignIn
