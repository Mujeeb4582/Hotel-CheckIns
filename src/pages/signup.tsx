import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import React from "react";
import styles from "../styles/login.module.scss";
import Link from "next/link";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import router from "next/router";

const Signup: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
        message.success("Sign Up Successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles["center-form"]}>
      <Form
        name="register"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        className={styles.loginForm}
      >
        <Typography.Title style={{ textAlign: "center" }}>
          Sign up!
        </Typography.Title>
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
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
        <Divider style={{ borderColor: "black" }}>
          {" "}
          Or <Link href="/login">Log In!</Link>{" "}
        </Divider>
      </Form>
    </div>
  );
};

export default Signup;
