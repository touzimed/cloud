import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set the initial center of the map
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg' // Replace with your own API key
})(MapContainer);
