import axios from "axios";

export const authenticateUser = (props) => {
  const { credentials, dispatch, history, addToast } = props;

  dispatch({ type: "TOGGLE_LOADING" });

  axios
    .post("http://localhost:2358/authenticate", credentials)
    .then((res) => {
      console.log(res);
      localStorage.setItem("authJwt", res.data.jwt);
      localStorage.setItem("profile", JSON.stringify(res.data.profile));
      dispatch({ type: "SET_AUTH", payload: res.data.profile });
      addToast("success", "Successfully Logged In");
      history.push("/");
    })
    .catch((err) => {
      addToast("error", "Invalid Credentials");
    })
    .finally(dispatch({ type: "TOGGLE_LOADING" }));
};
