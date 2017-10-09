import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import Textfield from '../common/textfield';

class Signup extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset>
                    <Field name="email" type="email" component={Textfield} label="Email:"/>
                    <Field name="password" component={Textfield} type="password" label="Password:"/>
                    <Field name="passwordConfirm" component={Textfield} type="password" label="Confirm Password:"/>
                </fieldset>
                <br/>
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
        );
    }
}

function validate(form){
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        errors.email = 'Invalid email address'
    } else if(!form.email) {
        errors.email = "Required field";
    }
    
    if(form.password !== form.passwordConfirm) {
        errors.passwordConfirm = "Password doesn't match";
    }

    if(!form.password) {
        errors.password = 'Required field';
    }

    if(!form.passwordConfirm) {
        errors.passwordConfirm = 'Required field';
    }
    
    return errors;
}

const reduxFormSignup = reduxForm({
    form: 'signup',
    validate
},null, actions)(Signup);

export default reduxFormSignup;