import { Layout } from "antd";
import * as React from "react";

export const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
