import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import {users} from "./data/users";

const App = () => {
    const [usersList, handleUsers] = useState(users);
    const deleteUserHandler = userId => handleUsers(usersList.filter((user, i) => user.id != userId));
    const addUserHandler = user => handleUsers([{id: Math.random(), ...user}, ...usersList]);

    const [ isModalShown, invertModalState ] = useState(false);
    const preventScrollClass = 'prevent-scroll';
    const bodyClasses = document.body.classList;

  const modalHandler = () => {
      invertModalState(!isModalShown);
      isModalShown ? bodyClasses.remove(preventScrollClass) : bodyClasses.add(preventScrollClass);
  };

  return (
    <div className="App">
        <header>
            <Button clickHandler={modalHandler}>Add new user</Button>
        </header>

        <CardsContainer usersList={usersList} deleteUserHandler={deleteUserHandler}/>

        { isModalShown && <Modal closeHandler={modalHandler} addUserHandler={addUserHandler}/> }
    </div>
  );
};

export default App;
