import { stepActionType } from "./step.actions";

export const stepReducer = (state, action) => {
  const { type } = action;
  const { current } = state;

  if (type === stepActionType.SET_IS_AUTO_MODE) {
    return { ...state, isAutoMode: true };
  } else if (type === stepActionType.SET_IS_NOT_AUTO_MODE) {
    return { ...state, isAutoMode: false };
  } else if (type === stepActionType.SET_IS_PRODUCT) {
    return { ...state, isAction: true, isUser: false };
  } else if (type === stepActionType.SET_IS_FORMAT) {
    return { ...state, isAction: false, isUser: true };
  } else if (type === stepActionType.INCREASE_CURRENT) {
    return { ...state, current: current + 1 };
  } else if (type === stepActionType.DECREASE_CURRENT) {
    return { ...state, current: current - 1 };
  } else {
    return state;
  }
};
