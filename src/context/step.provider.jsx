import * as React from "react";
import { stepReducer } from "./step.reducer";

export const initialState = {
  current: 0,
  loading: false,
  isAutoMode: true,
  isProduct: true,
  isFormat: false,
};

const StateStepContext = React.createContext(null);
const DispatchStepContext = React.createContext(null);

export const StepContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(stepReducer, initialState);

  return (
    <StateStepContext.Provider value={state}>
      <DispatchStepContext.Provider value={dispatch}>
        {children}
      </DispatchStepContext.Provider>
    </StateStepContext.Provider>
  );
};

export const useSelect = () => {
  const value = React.useContext(StateStepContext);
  if (value === undefined) {
    throw new Error("useSelect must be used within ContextProvider");
  }
  return value;
};

export const useDispatch = () => {
  const value = React.useContext(DispatchStepContext);
  if (value === undefined) {
    throw new Error("useDispatch must be used within ContextProvider");
  }
  return value;
};
