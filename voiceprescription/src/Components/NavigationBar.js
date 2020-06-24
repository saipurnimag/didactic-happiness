import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, LoginOutlined, LockOutlined, GithubOutlined } from '@ant-design/icons'

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menuBar" >
        <div className="logo">
          <a href="">VoicePrescription</a>
        </div>
        <div className="menuCon">
          
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
		  <Menu mode="vertical">
            <Menu.Item key="Login" icon={<SettingOutlined />} title="Login">
				Login
			</Menu.Item>
			<Menu.Item key="Prescription" icon={<LoginOutlined />} title="Prescription">
				Prescription
			</Menu.Item>
			</Menu>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
