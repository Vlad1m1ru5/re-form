import { ActionsUsersContextProvider } from "./actions-users.context";
import * as React from "react";

export const ContextProvider = ({ children }) => {
  return <ActionsUsersContextProvider>{children}</ActionsUsersContextProvider>;
};
