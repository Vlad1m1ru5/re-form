import { actionsUsersActionType } from "./actions-users.actions";

export const actionsUsersReducer = (state, action) => {
  const { type } = action;
  const { current } = state;

  if (type === actionsUsersActionType.SET_IS_ACTION) {
    return { ...state, isAction: true, isUser: false };
  } else if (type === actionsUsersActionType.SET_IS_USER) {
    return { ...state, isAction: false, isUser: true };
  } else if (type === actionsUsersActionType.INCREASE_CURRENT) {
    return { ...state, current: current + 1 };
  } else if (type === actionsUsersActionType.DECREASE_CURRENT) {
    return { ...state, current: current - 1 };
  } else {
    return state;
  }
};
