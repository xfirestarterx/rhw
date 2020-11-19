import './Button.css';
import React from "react";

const Button = ({ clickHandler, type, className, children }) => <button type={type} onClick={clickHandler} className={`Button ${className}`}>{children}</button>;

export default Button;