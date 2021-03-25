import { createContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducers/AppReducer";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [appState, dispatch] = useReducer(appReducer, {}, () => {
    return {
      loading: false,
      auth: false,
      toast: null,
    };
  });

  const addToast = (kind, title, timeout = 3000) => {
    dispatch({ type: "SET_TOAST", payload: { kind, title } });
    setTimeout(function () {
      dispatch({ type: "SET_TOAST", payload: null });
    }, timeout);
  };

  useEffect(() => {
    console.log("changes in auth");
  }, [appState.auth]);

  return (
    <AppContext.Provider value={{ appState, dispatch, addToast }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
