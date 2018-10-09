import React from 'react';
import { Button } from 'antd';

export default class CreatePostButton extends React.Component {
  // state = { visible: false }

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // }

  // handleOk = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }

  // handleCancel = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }

  render() {
    return (
      < div >
        <Button type="primary">CreatePostButton</Button>
      </div >
    )
  }
}