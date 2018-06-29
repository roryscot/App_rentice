import React from 'react';

const RegisterInput = (props) => {
    const {name, title, onChange, type} = props;
    return  (
        <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <input
                className="form-control"
                type={type} id={name}
                onChange={onChange}
                placeholder={title}
                name={name}
                required
            />
        </div>
    );
}

export default RegisterInput;