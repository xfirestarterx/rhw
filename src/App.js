import React from 'react';
import { useState } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import { users } from './data/users';
import Button from "./components/Button/Button";

const App = () => {
  const [ isModalShown, invertModalState ] = useState(true);

  const modalHandler = () => invertModalState(!isModalShown);

  return (
    <div className="App">
      <Button clickHandler={modalHandler}>Button some</Button>

      {
        users.map((user, idx) =>
          <Card key={user.id} user={user} />
        )
      }

      { isModalShown && <Modal/> }
    </div>
  );
};

export default App;
