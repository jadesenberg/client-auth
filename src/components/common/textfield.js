import React from 'react';

const Textfield = ({ input, label, type, meta: { touched, error }}) => {
    return (
        <fieldset className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <input className="form-control" {...input} type={type}/>
            { touched && error && <span className="text-danger">{error}</span> }
        </fieldset>
    );
}

export default Textfield;