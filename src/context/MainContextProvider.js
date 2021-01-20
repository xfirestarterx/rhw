import React, { useState, useEffect } from 'react';
import { url , options } from '../request/request';

export const MainContext = React.createContext([]);

const MainContextProvider = ({ updateIsLoaded, children }) => {
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
        <MainContext.Provider value={data}>
            { children }
        </MainContext.Provider>
    );
}

export default MainContextProvider;
