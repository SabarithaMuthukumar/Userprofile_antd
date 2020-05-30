import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import image from "../assets/logo.svg";
import UserProfile from "./UserProfile";
import DetailedCard from "./DetailedCard";
import "../style/layout.css";
const { Header, Sider } = Layout;
const { SubMenu } = Menu;
class LayoutPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="contentlogo">
            <img src={image} alt="" className="logo" />
            <p>Ant Design</p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            className="menu"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Account ">
              <Menu.Item key="1" icon={<SmileOutlined />}>
                Account Center
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <div class="layoutflex">
            <UserProfile />
            <DetailedCard className="DetailedCard" />
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;
