import React, { Component } from 'react';
import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS, POS_KEY } from '../constants'
import Gallery from './Gallery.js'

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

export default class Home extends Component {
  state = {
    loadingGeoLocation: false,
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
  }

  onFailedLoadGeolocation = (error) => {
    this.setState({ loadingGeoLocation: false, error: error.message })
  }

  getGalleryPanelContent = () => {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else if (this.state.loadingGeoLocation) {
      return <Spin tip="Loading geo location..." />;
    }
    else {
      return <Gallery />;
    }
  }


  render() {
    return (
      <Tabs tabBarExtraContent={operations} className="main-tabs">
        <TabPane tab="Posts" key="1"> {this.getGalleryPanelContent()}
        </TabPane>
        <TabPane tab="Map" key="2">Content of Tab Pane 2</TabPane>
      </Tabs>
    )
  }
}