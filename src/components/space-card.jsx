import { Card, Space } from "antd";
import * as React from "react";

export const SpaceCard = ({ children }) => {
  return (
    <Card>
      <Space direction="vertical" size="large">
        {children}
      </Space>
    </Card>
  );
};
