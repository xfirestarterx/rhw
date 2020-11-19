import './Button.css';
import React from "react";

const Button = ({ clickHandler, children }) => {
    return <span onClick={clickHandler}>{children}</span>
};

export default Button;