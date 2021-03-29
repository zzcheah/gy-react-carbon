import { createContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducers/AppReducer";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  var auth = null;

  if (localStorage.authJwt) {
    const decoded = jwt_decode(localStorage.authJwt);
    var current_time = new Date().getTime() / 1000;
    const profileString = localStorage.getItem("profile");
    if (profileString) {
      auth = current_time > decoded.exp ? null : JSON.parse(profileString);
    }
  }

  if (auth) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.authJwt}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  const [appState, dispatch] = useReducer(appReducer, {}, () => {
    return {
      loading: false,
      auth,
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
