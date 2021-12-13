import { Button, Form, Input } from "antd";
import * as React from "react";

export const UsersForm = ({
  formName,
  formInstance,
  userGroupLabel,
  submitLabel,
  backLabel,
  onBackClick,
}) => {
  return (
    <Form name={formName} form={formInstance} labelCol={{ span: 2 }}>
      <Form.Item
        label={userGroupLabel}
        name={["user", "group"]}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Button onClick={onBackClick}>{backLabel}</Button>
      <Button type="primary" htmlType="submit">
        {submitLabel}
      </Button>
    </Form>
  );
};
