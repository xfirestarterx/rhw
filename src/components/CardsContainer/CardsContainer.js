import './CardsContainer.css';
import {users} from "../../data/users";
import Card from "../Card/Card";
import React from "react";

const CardsContainer = () => {
    return <div className="CardsContainer">
        {users.map((user, idx) =>
            <Card key={user.id} user={user} />
        )}
    </div>
};

export default CardsContainer;