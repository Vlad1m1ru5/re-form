import * as React from "react";
import { useActionsUsersState } from "../context/actions-users.context";
import { ActionsUsersSteps } from "./actions-users-steps";

export const ActionsUsersStepsContainer = () => {
  const { current } = useActionsUsersState();

  return <ActionsUsersSteps current={current} steps={["Actions", "Users"]} />;
};
