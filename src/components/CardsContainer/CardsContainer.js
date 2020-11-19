import './CardsContainer.css';
import {users} from "../../data/users";
import Card from "../Card/Card";
import React, { useState } from "react";

const CardsContainer = () => {

    const [usersList, deleteUser] = useState(users);

    const deleteUserHandler = userId => deleteUser(usersList.filter((user, i) => user.id != userId));
    return <div className="CardsContainer">
        {usersList.map((user, idx) =>
            <Card key={user.id} user={user} deleteHandler={deleteUserHandler} />
        )}
    </div>
};

export default CardsContainer;