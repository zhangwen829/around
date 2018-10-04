import React, { Component } from 'react';
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

export default class Home extends Component {
  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => { console.log(position); },
        (error) => { console.log(error); }
      );
    } else {
      console.log('No Geolocation');
    }
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