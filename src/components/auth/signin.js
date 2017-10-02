import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }){
        console.log(email,password);

        this.props.signinUser({ email, password }, this.props.history);
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

    render(){
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-control">
                    <label>Email:</label>
                    <Field className="form-control" name="email" component="input"/>
                    
                    <label>Password:</label>
                    <Field className="form-control" name="password" component="input" type="password"/>
                </fieldset>
                {this.renderErrorMessage()}
                <button className="btn btn-primary" action="submit">Login</button>
            </form>
        );
    }

}


const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, actions)(withRouter(reduxFormSignin));