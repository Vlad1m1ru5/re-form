import { Steps } from "antd";
import * as React from "react";

export const ActionsUsersSteps = ({ current = 0, steps = [] }) => {
  return (
    <Steps current={current}>
      {steps.map((step, index) => (
        <Steps.Step key={index} title={step} />
      ))}
    </Steps>
  );
};
