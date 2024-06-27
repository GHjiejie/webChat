import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./login.css";
import "../../types/user";
import { login } from "../../apis/users";

const App: React.FC = () => {
  // 经过验证之后执行的逻辑
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    handleLogin(values);
  };

  const handleLogin = async (values: any) => {
    const res = await login(values);
    console.log("res", res);
  };

  return (
    <div className="form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            // onClick={handleLogin}
          >
            登录
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
