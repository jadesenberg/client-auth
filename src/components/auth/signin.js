import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {

    handleFormSubmit({ email, password }){
        console.log(email,password);
    }

    render(){
        const { handleSubmit, fields: { email, password }} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-control">
                    <label>Email:</label>
                    <input className="form-control" {...email}/>
                    
                    <label>Password:</label>
                    <input className="form-control" {...password}/>
                </fieldset>
                <button className="btn btn-primary" action="submi">Login</button>
            </form>
        );
    }

}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);