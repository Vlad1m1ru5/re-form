import * as React from "react";
import { useSelect } from "../context/step.provider";
import { GostSteps } from "./gost-steps";

export const GostStepsContainer = () => {
  const { current } = useSelect();

  return <GostSteps current={current} steps={["Product", "Format"]} />;
};
