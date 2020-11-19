import './Button.css';
import React from "react";

const Button = ({ clickHandler, children }) => {
    {console.log('clicked')}
    return <span onClick={clickHandler} className={"Button"}>{children}</span>
};

export default Button;