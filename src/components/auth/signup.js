import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import Textfield from '../common/textfield';

class Signup extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps, this.props.history);
    }

    renderErrorMessage() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Hey!!</strong> {this.props.errorMessage}
                </div>
            )
        }
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
                {this.renderErrorMessage()}
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

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
}

const reduxFormSignup = reduxForm({
    form: 'signup',
    validate
})(Signup);

export default connect(mapStateToProps, actions)(withRouter(reduxFormSignup));