import './Modal.css';
import Button from "../Button/Button";
import React from "react";

const Modal = ({ closeHandler }) => {
    return <div className="ModalContainer">
        <Button clickHandler={closeHandler}>Close</Button>
    </div>
};

export default Modal;