import React, { useState, useEffect } from 'react';
import './App.css';
import CardsWraper from './components/CardsWrapper/CardsWrapper';
import MapWrapper from './components/MapWrapper/MapWrapper';


const App = () => {
  return (
    <div className="MainContainer">
      <CardsWraper />
      <MapWrapper />
    </div>
  );
}
export default App;
