import React from "react";
import "./home.css";
import { Flex, Layout } from "antd";
import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatSider from "./ChatSider";

const { Header, Footer, Sider, Content } = Layout;

const Home: React.FC = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout className="layout">
        <Sider width="25%" className="sider">
          <ChatSider />
        </Sider>
        <Layout>
          <Header className="header">
            <ChatHeader />
          </Header>
          <Content className="content">
            <ChatContent />
          </Content>
          <Footer className="footer">
            <ChatFooter />
          </Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default Home;
