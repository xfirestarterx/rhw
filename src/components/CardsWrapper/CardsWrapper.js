import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import Card from '../Card/Card';

const CardsWrapper = () => {
    const data = useContext(MainContext);

    return (
        <div className="CardsWrapper Wrapper">
            { data.map(item => <Card key={item.id} item={item} />) }
        </div>
    )
}

export default CardsWrapper;
