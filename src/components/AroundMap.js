import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { POS_KEY } from '../constants';

class AroundMap extends React.Component {
  reloadMarkers = () => {
    const center = this.map.getCenter();
    const range = this.getRange();
    const location = {
      lat: center.lat(),
      lon: center.lng()
    }
    // call Home.js loadNearbyPosts(location, range)
    this.props.loadNearbyPosts(location, range);
  }

  getRange = () => {
    const google = window.google;
    const center = this.map.getCenter();
    const bounds = this.map.getBounds();
    if (center && bounds) {
      const ne = bounds.getNorthEast();
      const right = new google.maps.LatLng(center.lat(), ne.lng());
      return 0.001 * google.maps.geometry.spherical.computeDistanceBetween(center, right);
    }
  }

  getMapRef = (map) => {
    this.map = map;
    window.map = map;
  }

  render() {
    const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));

    return (
      <GoogleMap
        ref={this.getMapRef}
        onDragEnd={this.reloadMarkers}
        onZoomChanged={this.reloadMarkers}
        defaultZoom={10}
        defaultCenter={{ lat: lat, lng: lon }}
      >
        {
          this.props.posts.map(
            (post) => (<Marker
              key={post.url}
              position={{ lat: post.location.lat, lng: post.location.lon }} />)
          )
        }
      </GoogleMap>
    );
  }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));