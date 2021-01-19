import React, { useState, useEffect } from 'react';
import './App.css';
import CardsWraper from './components/CardsWrapper/CardsWrapper';
import MapWrapper from './components/MapWrapper/MapWrapper';
import { url , options } from './request/request';

const App = () => {
  const [ isLoaded, updateIsLoaded ] = useState(false);
  const [ data, updateData ] = useState([]);

  const fetchData = () => {
    fetch(url, options)
      .then(data => data.json())
      .then(json => {
        updateData(json?.data?.body?.searchResults?.results ?? []);
        updateIsLoaded(true);
      })
      .catch((error) => console.log(error))
  };

  useEffect(fetchData, []);

  return (
    <>
      { !isLoaded && <div>loading</div> }

      <div className="MainContainer">
        <CardsWraper />
        <MapWrapper />
      </div>
    </>
  );
};

export default App;
