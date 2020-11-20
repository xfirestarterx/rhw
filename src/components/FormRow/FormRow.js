import React from 'react';
import './FormRow.css';

const FormRow = ({ name, placeholder, type = 'text' }) => {
    return <div className="FormRow">
        <input name={name} placeholder={placeholder} type={type} />
    </div>
};

export default FormRow;