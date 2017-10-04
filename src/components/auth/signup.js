import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <labe>Email:</labe>
                    <Field className="form-control" name="email" component="input"/>

                    <label>Password:</label>
                    <Field className="form-control" name="password" component="input" type="password"/>

                    <label>Confirm Password:</label>
                    <Field className="form-control" name="passwordConfirm" component="input" type="password"/>
                </fieldset>
                <br/>
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
        );
    }
}

const reduxFormSignup = reduxForm({
    form: 'signup'
})(Signup);

export default reduxFormSignup;