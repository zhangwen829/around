import React, { Component } from 'react';
import { Tabs, Spin } from 'antd';
import $ from 'jquery';
import { GEO_OPTIONS, POS_KEY, API_ROOT, AUTH_PREFIX, TOKEN_KEY } from '../constants';
import Gallery from './Gallery.js';
import CreatePostButton from './CreatePostButton.js';
import { WrappedAroundMap } from './AroundMap.js';



const TabPane = Tabs.TabPane;

export default class Home extends Component {
  state = {
    loadingGeoLocation: false,
    loadingPost: false,
    posts: [],
    error: '',
  }

  componentDidMount() {
    this.setState({ loadingGeoLocation: true, error: '' });
    this.getGeoLocation();
  }

  getGeoLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.onSuccessLoadGeoLocation,
        this.onFailedLoadGeolocation,
        GEO_OPTIONS,
      );
    } else {
      this.setState({ error: 'Your browser does not support geolocation!' });
    }
  }

  onSuccessLoadGeoLocation = (position) => {
    this.setState({ loadingGeoLocation: false, error: '' });
    const { latitude, longitude } = position.coords;
    localStorage.setItem(POS_KEY, JSON.stringify({ lat: latitude, lon: longitude }));
    this.setState({ loadingGeoLocation: false, err: '' });
    this.loadNearbyPosts();
  }

  onFailedLoadGeolocation = (error) => {
    this.setState({ loadingGeoLocation: false, error: error.message })
  }

  getGalleryPanelContent = () => {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else if (this.state.loadingGeoLocation) {
      return <Spin tip="Loading geo location..." />;
    } else if (this.state.loadingPost) {
      return <Spin tip="Loading posts..." />;
    } else if (this.state.posts && this.state.posts.length > 0) {
      const images = this.state.posts.map((post) => {
        return {
          user: post.user,
          src: post.url,
          thumbnail: post.url,
          thumbnailWidth: 400,
          thumbnailHeight: 300,
          caption: post.message,
        }
      });
      return <Gallery images={images} />;
    }

    else {
      return null;
    }
  }

  loadNearbyPosts = (location, range) => {
    this.setState({ loadingPost: true });
    const { lat, lon } = location || JSON.parse(localStorage.getItem(POS_KEY));
    const radis = range || 20;
    const token = localStorage.getItem(TOKEN_KEY);
    $.ajax({
      url: `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=${radis}`,
      headers: {
        Authorization: `${AUTH_PREFIX} ${token}`
      }
    }).then((response) => {
      this.setState({ posts: response || [], loadingPost: false });
    }, (response) => {
      this.setState({ error: response.responseText });
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    const createPostButton = <CreatePostButton loadNearbyPosts={this.loadNearbyPosts} />;
    return (
      <Tabs tabBarExtraContent={createPostButton} className="main-tabs">
        <TabPane tab="Posts" key="1"> {this.getGalleryPanelContent()}
        </TabPane>
        <TabPane tab="Map" key="2"><WrappedAroundMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          posts={this.state.posts}
          loadNearbyPosts={this.loadNearbyPosts}

        /></TabPane>
      </Tabs>
    )
  }
}