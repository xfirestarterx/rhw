import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import { users } from './data/users';

const App = () => {
  return (
    <div className="App">
      {
        users.map((user, idx) => {
          const { id } = user;
          return <Card key={id} id={id} />
        })
      }
    </div>
  );
}

export default App;
