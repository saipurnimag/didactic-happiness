import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, LoginOutlined, LockOutlined, GithubOutlined, HomeOutlined, PaperClipOutlined, DoubleRightOutlined, UserDeleteOutlined, SmileOutlined, FilePdfFilled, FilePdfOutlined, HomeFilled, HomeTwoTone } from '@ant-design/icons'

const { SubMenu } = Menu;

const RightMenu = () =>{
  const [current, setCurrent] = useState("mail");
  const handleClick = (event) =>{
    setCurrent(event.key)
  }
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
    >
      <SubMenu key="Home" icon={<HomeOutlined />} title="Home">
        Home
      </SubMenu>
      <SubMenu key="Login" icon={<LoginOutlined />} title="Login">
        Login
      </SubMenu>
      <SubMenu key="Prescription" icon={<FilePdfOutlined />} title="Prescription">
        Prescription
      </SubMenu>
      <SubMenu key="Register" icon={<UserDeleteOutlined />} title="Register">
        Login
      </SubMenu>
      <SubMenu key="About us" icon={<SmileOutlined />} title="About us">
        About us
      </SubMenu>
      <SubMenu key="Github" icon={<GithubOutlined />} title={<a href="https://github.com/saipurnimag/didactic-happiness">Github</a>}>
        About us
      </SubMenu>
      
    </Menu>
  );
}
 
export default RightMenu;
