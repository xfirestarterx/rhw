import React, { useState } from "react";
import Button from "../Button/Button";

const AddUserForm = ({ addUserHandler }) => {
    const [user, handleUser] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        const res = {
            [name]: value,
            ...user
        };
        return handleUser(res);
    };

    const btnClickHandler = () => {
        console.log(user);
        addUserHandler(user);
    };

    return <div className="UserForm">
        <div className="FormWrapper">
            <input name="name" type="text" placeholder="Name" onKeyUp={e => handleInput(e)}/>
        </div>
        <Button className="AddUser" clickHandler={btnClickHandler}>Add</Button>
    </div>
};

export default AddUserForm;