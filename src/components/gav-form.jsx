import { Button, Col, Form, Input, Row, Switch } from "antd";
import * as React from "react";

const GAV_TYPE_INITIAL_VALUE = "zip";

export const GavForm = ({
  formName,
  formInstance,
  autoModeLabel,
  gavArtifactIdLabel,
  gavGroupIdLabel,
  gavVersionLabel,
  gavClassifierLabel,
  gavTypeLabel,
  submitLabel,
}) => {
  return (
    <Form name={formName} form={formInstance} labelCol={{ span: 2 }}>
      <Form.Item
        label={autoModeLabel}
        name={["mode", "auto"]}
        valuePropName="checked"
        initialValue={true}
      >
        <Switch />
      </Form.Item>
      <Form.Item
        label={gavArtifactIdLabel}
        name={["gav", "artifactId"]}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={gavGroupIdLabel}
        name={["gav", "groupId"]}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={gavVersionLabel}
        name={["gav", "version"]}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={gavClassifierLabel} name={["gav", "classifier"]}>
        <Input />
      </Form.Item>
      <Form.Item
        label={gavTypeLabel}
        name={["gav", "type"]}
        initialValue={GAV_TYPE_INITIAL_VALUE}
        hidden
      >
        <Input />
      </Form.Item>
      <Row justify="end">
        <Col>
          <Button type="primary" htmlType="submit">
            {submitLabel}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
