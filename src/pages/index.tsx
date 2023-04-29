import Head from 'next/head'
import { useState } from "react";
import { Layout, Menu, Table, Button, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const data = [
  {
    key: "1",
    title: "CheckIn name",
    owner: "John Doe",
    status: "CHECKED IN",
    createdAt: "28th Apr 2023",
  },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
    form.resetFields();
  };

  const onCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <>
      <Head>
      <title>Hotel CheckIn</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header className="header">
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
    </Header>
      <Content style={{ backgroundColor: "#fff" }}>
        <div className="site-layout-content">
          <section className="check-ins">
            <div>
              <h1 className="check-ins__title">CheckIns</h1>
              <p className="check-ins__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
              className="add-button"
            >
              Add Check In
            </Button>
          </section>

          <Table className="table" columns={columns} dataSource={data} />

          <Modal
            title="New CheckIn"
            visible={visible}
            onCancel={onCancel}
            footer={null}
          >
            <Form form={form} onFinish={onFinish}>
              <Form.Item name="title">
                <Input placeholder="Check In Title" />
              </Form.Item>
              <Form.Item name="imageUrl">
                <Input placeholder="Image Url" />
              </Form.Item>
              <div style={{ textAlign: "right" }}>
                <Button style={{ marginRight: 8 }} onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="primary" className="add-button" htmlType="submit">
                  Create Check In
                </Button>
              </div>
            </Form>
          </Modal>
        </div>
      </Content>
    </Layout>
    </>
  );
}
