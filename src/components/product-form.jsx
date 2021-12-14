import { Button, Col, Form, Row, Select, Switch } from "antd";
import * as React from "react";

export const ProductForm = ({
  formName,
  formInstance,
  autoModeLabel,
  productIdLabel,
  productIdOptions,
  productVersionsLabel,
  productVersionsOptions,
  submitLabel,
  onProductIdChange,
}) => {
  const handleProductIdChange = () => {
    onProductIdChange(["product", "version"]);
  };

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
        label={productIdLabel}
        name={["product", "id"]}
        rules={[{ required: true }]}
      >
        <Select options={productIdOptions} onChange={handleProductIdChange} />
      </Form.Item>
      <Form.Item
        label={productVersionsLabel}
        name={["product", "version"]}
        rules={[{ required: true }]}
      >
        <Select options={productVersionsOptions} />
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
