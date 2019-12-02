import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Helloworld from "./Page/Helloworld";

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px"
            }}
          />
          <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <HashRouter>
                <Link to="/helloworld">
                  <span>Helloworld</span>
                </Link>
              </HashRouter>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <HashRouter>
                <Switch>
                  <Route exact path="/helloworld" component={Helloworld} />
                </Switch>
              </HashRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
