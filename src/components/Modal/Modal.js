import './Modal.css';
import Button from "../Button/Button";
import React from "react";
import AddUserForm from "../AddUserForm/AddUserForm";

const Modal = ({ closeHandler, addUserHandler }) => {
    return <div className="ModalContainer">
        <Button clickHandler={closeHandler}>Close</Button>
        <AddUserForm addUserHandler={addUserHandler}/>
    </div>
};

export default Modal;