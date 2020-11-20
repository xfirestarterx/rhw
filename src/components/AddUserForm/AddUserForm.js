import Button from "../Button/Button";
import React from "react";
import FormRow from "../FormRow/FormRow";
import './AddUserForm.css';

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

        e.target.form.reset();
    };

    return <div className="UserForm">
        <div className="FormWrapper">
            <form name="userForm">
                <FormRow name="name" type="text" placeholder="Name"/>
                <FormRow name="username" type="text" placeholder="Username"/>
                <FormRow name="email" type="text" placeholder="Email"/>
                <FormRow name="phone" type="text" placeholder="Phone"/>
                <Button type="submit" className="AddUser" clickHandler={e => handleSubmit(e)}>Add</Button>
            </form>
        </div>
    </div>
};

export default AddUserForm;