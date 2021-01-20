import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import Card from '../Card/Card';

const CardsWrapper = () => {
    const data = useContext(MainContext);

    return (
        <div className="CardsWrapper Wrapper">
            cards wrapper
            {
                data.map(el => {
                    <Card />
                })
            }
        </div>
    )
}

export default CardsWrapper;
