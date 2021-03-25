export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: payload,
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SET_TOAST":
      return { ...state, toast: payload };
    default:
      return state;
  }
};
