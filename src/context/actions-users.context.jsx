import * as React from "react";
import { actionsUsersReducer } from "./actions-users.reducer";

export const initialState = {
  current: 0,
  isAction: true,
  isUser: false,
};

const StateActionsUsersContext = React.createContext(null);
const DispatchActionsUsersContext = React.createContext(null);

export const ActionsUsersContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(actionsUsersReducer, initialState);

  return (
    <StateActionsUsersContext.Provider value={state}>
      <DispatchActionsUsersContext.Provider value={dispatch}>
        {children}
      </DispatchActionsUsersContext.Provider>
    </StateActionsUsersContext.Provider>
  );
};

export const useActionsUsersState = () => {
  const state = React.useContext(StateActionsUsersContext);
  if (state === undefined) {
    throw new Error(
      "useActionsUsersSelect must be used within StepContextProvider"
    );
  }
  return state;
};

export const useActionsUsersDispatch = () => {
  const dispatch = React.useContext(DispatchActionsUsersContext);
  if (dispatch === undefined) {
    throw new Error(
      "useActionsUsersDispatch must be used within StepContextProvider"
    );
  }
  return dispatch;
};
