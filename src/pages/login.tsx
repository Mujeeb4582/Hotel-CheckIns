import {
  FacebookFilled,
  GoogleOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import Link from "next/link";
import React from "react";
import styles from "../styles/login.module.scss";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const login = () => {
    message.success("Login Successful!");
  };

  return (
    <div className={styles["center-form"]}>
      <Form
        name="normal_login"
        className={`login-form ${styles["loginForm"]}`}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
        </Form.Item>
        <Divider style={{ borderColor: "black" }}>
          {" "}
          Or <Link href="/signup">Sign UP!</Link>{" "}
        </Divider>
        <Divider style={{ borderColor: "black" }}>Or Login with</Divider>
        <div className={styles.socialLogin}>
          <GoogleOutlined
            className={styles.socialIcon}
            onClick={login}
            style={{ color: "#DB4437" }}
          />
          <FacebookFilled
            className={styles.socialIcon}
            onClick={login}
            style={{ color: "#3b5998" }}
          />
          <TwitterOutlined
            className={styles.socialIcon}
            onClick={login}
            style={{ color: "#00acee" }}
          />
        </div>
      </Form>
    </div>
  );
};

export default Login;
