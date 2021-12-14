import { Button, Col, Form, Input, Row } from "antd";
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
      <Row justify="end">
        <Col>
          <Button type="link" onClick={onBackClick}>
            {backLabel}
          </Button>
          <Button type="primary" htmlType="submit">
            {submitLabel}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
