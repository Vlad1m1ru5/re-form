export const actionsUsersActionType = {
  SET_IS_ACTION: "SET_IS_ACTION",
  SET_IS_USER: "SET_IS_USER",
  INCREASE_CURRENT: "INCREASE_CURRENT",
  DECREASE_CURRENT: "DECREASE_CURRENT",
};

export const setIsAction = () => ({
  type: actionsUsersActionType.SET_IS_ACTION,
});
export const setIsUser = () => ({ type: actionsUsersActionType.SET_IS_USER });
export const increaseCurrent = () => ({
  type: actionsUsersActionType.INCREASE_CURRENT,
});
export const decreaseCurrent = () => ({
  type: actionsUsersActionType.DECREASE_CURRENT,
});
