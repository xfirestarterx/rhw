import React, { useContext } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { MainContext } from '../../context/MainContextProvider';

const Map = withScriptjs(withGoogleMap(() => {
    const data = useContext(MainContext);

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 40.716, lng: -74.004 }}
        >
            {
                data.map(({ coordinate: { lat, lon } }) => <Marker position={{ lat, lng: lon }} />)
            }
        </GoogleMap>
    );
}));

export default Map;
