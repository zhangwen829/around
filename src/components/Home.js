import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS } from '../constants'

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

export default class Home extends Component {
  componentDidMount() {
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
    console.log(position);
  }

  onFailedLoadGeolocation = (error) => {
    console.log(error);
  }

  render() {
    return (
      <Tabs tabBarExtraContent={operations} className="main-tabs">
        <TabPane tab="Posts" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Map" key="2">Content of Tab Pane 2</TabPane>
      </Tabs>
    )
  }
}