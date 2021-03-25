import { createElement, useContext } from "react";

import { Loading } from "carbon-components-react";
import StoryContent from "./components/layout/StoryContent";
import AppHeader from "./components/layout/AppHeader";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MyRequests from "./pages/MyRequests";
import RequestForm from "./components/request/RequestForm";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ToastStatus from "./components/layout/ToastStatus";
import { AppContext } from "./contexts/AppContext";

function LoadingBlur({ loading, children }) {
  const style = {
    loading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    blur: {
      opacity: loading ? "0.7" : "1",
      pointerEvent: loading ? "none" : "",
    },
  };
  return (
    <div>
      {loading ? (
        <div style={style.loading}>
          <Loading />
        </div>
      ) : null}
      <div style={style.blur}>{children}</div>
    </div>
  );
}

function PrivateRoute({ component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          createElement(component)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const { appState } = useContext(AppContext);
  const { loading, auth, toast } = appState;

  return (
    <>
      <BrowserRouter>
        <LoadingBlur loading={loading}>
          <AppHeader auth={auth} />
          <StoryContent>
            <ToastStatus toast={toast}></ToastStatus>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <PrivateRoute exact path="/" auth={auth} component={MyRequests} />
              <PrivateRoute
                path="/requestForm"
                auth={auth}
                component={RequestForm}
              />
            </Switch>
          </StoryContent>
        </LoadingBlur>
      </BrowserRouter>
    </>
  );
}

export default App;
