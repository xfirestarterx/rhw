import React, { useState } from 'react';
import './App.css';
import CardsWraper from './components/CardsWrapper/CardsWrapper';
import MapWrapper from './components/MapWrapper/MapWrapper';
import MainContextProvider from './context/MainContextProvider';
const App = () => {
  const [ isLoaded, updateIsLoaded ] = useState(false);

  return (
    <>
      { !isLoaded && <div>loading</div> }

      <MainContextProvider updateIsLoaded={updateIsLoaded}>
        <div className="MainContainer">
          <CardsWraper />
          <MapWrapper />
        </div>
      </MainContextProvider>
    </>
  );
};

export default App;
