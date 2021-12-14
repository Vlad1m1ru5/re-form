import { Spin } from "antd";
import * as React from "react";
import { useSelect } from "../context/step.provider";

export const SpinContainer = ({ children }) => {
  const { loading } = useSelect();

  return <Spin spinning={loading}>{children}</Spin>;
};
