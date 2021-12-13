import * as React from "react";
import { useActionsUsersSelect } from "../context/actions-users.context";
import { ActionsUsersSteps } from "./actions-users-steps";

export const ActionsUsersStepsContainer = () => {
  const { current } = useActionsUsersSelect();

  return <ActionsUsersSteps current={current} steps={["Actions", "Users"]} />;
};
