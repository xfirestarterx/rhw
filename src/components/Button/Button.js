import './Button.css';
import React from "react";

const Button = ({ clickHandler, className, children }) => <span onClick={clickHandler} className={`Button ${className}`}>{children}</span>;

export default Button;