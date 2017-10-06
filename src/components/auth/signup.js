import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import Textfield from '../common/textfield';

class Signup extends Component {
    render() {
        return (
            <form>
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
    }
    
    if(form.password !== form.passwordConfirm) {
        errors.passwordConfirm = "Password doesn't match";
    }
    
    return errors;
}

const reduxFormSignup = reduxForm({
    form: 'signup',
    validate
})(Signup);

export default reduxFormSignup;