import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
    render(){
        return(
            <form>
                <fieldset className="form-control">
                    <label>Email:</label>
                    <input className="form-control" />
                </fieldset>
                <fieldset className="form-control">
                    <label>Password:</label>
                    <input className="form-control" />>
                </fieldset>
                <button className="btn btn-primary" action="submi">Login</button>
            </form>
        );
    }

}

export default reduxForm({
    form: 'signin',
    field: ['email', 'password']
})(Signin);