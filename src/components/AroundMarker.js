import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export class AroundMarker extends React.Component {
  render() {
    const { location, user, message, url } = this.props.post;
    return (
      <Marker position={{ lat: location.lat, lng: location.lon }}>
        <InfoWindow>
          <div>
            <img className="around-marker-image" src={url} />
            <p>{`${user}: ${message}`}</p>
          </div>
        </InfoWindow>
      </Marker>
    )
  }
}