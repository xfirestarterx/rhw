import React from 'react';
import Map from '../Map/Map';

const MapWrapper = () => {
    return (
        <div className="MapWrapper Wrapper">
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="Map" />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default MapWrapper;
