import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { POS_KEY } from '../constants';

class AroundMap extends React.Component {
  render() {
    const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
    
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: lat, lng: lon }}
      >
        {
          this.props.posts.map(
            (post) => (<Marker position={{ lat: post.location.lat, lng: post.location.lon }} />)
          )
        }
      </GoogleMap>
    );
  }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));