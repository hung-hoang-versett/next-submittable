import { Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";
const { Content, Header } = Layout;
interface Props {
  children: React.Component | React.ReactNode;
}
const LayoutContainer: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key={"/"}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={"/forms"}>
            <Link href="/forms">Forms</Link>
          </Menu.Item>
          <Menu.Item key={"/projects"}>
            <Link href="/projects">Projects</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};
export default LayoutContainer;
