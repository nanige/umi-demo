import React, { FC } from 'react';
import { history, connect, IndexModelState, ConnectProps } from 'umi';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/api/login';

import './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const LoginPage: FC<PageProps> = (props) => {
  console.log(props);
  const onFinish = async (values: any) => {
    const res: any = await login({
      url: '/admin/auth/login',
      data: values,
    });
    if (res.errno === 0) {
      history.push({
        pathname: '/index',
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      <div className="login-box">
        <h2>轻食时刻</h2>
        <Form
          className="form-box"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input
              size="large"
              placeholder="请输入用户名"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password
              size="large"
              placeholder="请输入密码"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Button className="login-btn" type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ state }: { state: IndexModelState }) => ({
  state,
}))(LoginPage);
