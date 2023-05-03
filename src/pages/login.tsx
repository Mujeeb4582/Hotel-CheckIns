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
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
        message.success("Login Successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
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
