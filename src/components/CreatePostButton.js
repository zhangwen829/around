import React from 'react';
import { Button, Modal } from 'antd';

export default class CreatePostButton extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
      comfirmLoading: false,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      < div >
        <Button type="primary" onClick={this.showModal}>CreatePostButton</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div >
    )
  }
}