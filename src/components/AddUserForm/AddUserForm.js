import Button from "../Button/Button";
import React from "react";

const AddUserForm = ({ addUserHandler }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const { elements } = e.target.form;

        addUserHandler({
            'name': elements.name.value,
            'username': elements.username.value,
            'email': elements.email.value,
            'phone': elements.phone.value
        });
    };

    return <div className="UserForm">
        <div className="FormWrapper">
            <form name="userForm">
                <input name="name" type="text" placeholder="Name"/>
                <input name="username" type="text" placeholder="Username"/>
                <input name="email" type="text" placeholder="Email"/>
                <input name="phone" type="text" placeholder="Phone"/>
                <Button type="submit" className="AddUser" clickHandler={e => handleSubmit(e)}>Add</Button>
            </form>
        </div>
    </div>
};

export default AddUserForm;