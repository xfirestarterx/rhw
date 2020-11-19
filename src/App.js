import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
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

        <CardsContainer/>

        { isModalShown && <Modal closeHandler={modalHandler}/> }
    </div>
  );
};

export default App;
