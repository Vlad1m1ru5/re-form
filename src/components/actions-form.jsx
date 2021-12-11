import { Button, Form, Select } from "antd";
import * as React from "react";

export const ActionsForm = ({
  formName,
  formInstance,
  actionTypeLabel,
  actionTypeOptions,
  actionPayloadLabel,
  actionPayloadOptions,
  onActionTypeChange,
}) => {
  const handleActionTypeChange = () => {
    onActionTypeChange(["action", "payload"]);
  };

  return (
    <Form name={formName} form={formInstance} labelCol={{ span: 2 }}>
      <Form.Item
        label={actionTypeLabel}
        name={["action", "type"]}
        rules={[{ required: true }]}
      >
        <Select options={actionTypeOptions} onChange={handleActionTypeChange} />
      </Form.Item>
      <Form.Item
        label={actionPayloadLabel}
        name={["action", "payload"]}
        rules={[{ required: true }]}
      >
        <Select options={actionPayloadOptions} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
