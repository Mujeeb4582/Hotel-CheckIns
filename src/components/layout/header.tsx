import { Layout, Menu } from "antd";

const MyHeader = () => {
  return(
  <Layout.Header className="header">
  <div className="logo">AAA</div>
  <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
    <Menu.Item key="1">Feedback</Menu.Item>
    <Menu.Item key="2">Support</Menu.Item>
    <Menu.Item key="3">
      <img
        src="https://img.lovepik.com/element/40128/7461.png_1200.png"
        alt="avatar"
        style={{ width: 20, height: 20 }}
      />
    </Menu.Item>
  </Menu>
</Layout.Header>
)};

export default MyHeader;