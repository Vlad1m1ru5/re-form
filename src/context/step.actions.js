export const stepActionType = {
  SET_IS_AUTO_MODE: "SET_IS_AUTO_MODE",
  SET_IS_NOT_AUTO_MODE: "SET_IS_NOT_AUTO_MODE",
  SET_IS_PRODUCT: "SET_IS_PRODUCT",
  SET_IS_FORMAT: "SET_IS_FORMAT",
  INCREASE_CURRENT: "INCREASE_CURRENT",
  DECREASE_CURRENT: "DECREASE_CURRENT",
};

export const setIsAutoMode = () => ({
  type: stepActionType.SET_IS_AUTO_MODE,
});

export const setIsNotAutoMode = () => ({
  type: stepActionType.SET_IS_NOT_AUTO_MODE,
});

export const setIsProduct = () => ({
  type: stepActionType.SET_IS_PRODUCT,
});

export const setIsFormat = () => ({ type: stepActionType.SET_IS_FORMAT });

export const increaseCurrent = () => ({
  type: stepActionType.INCREASE_CURRENT,
});

export const decreaseCurrent = () => ({
  type: stepActionType.DECREASE_CURRENT,
});
