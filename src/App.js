import StoryContent from "./components/layout/StoryContent";
import RequestForm from "./components/request/RequestForm";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MyRequests from "./pages/MyRequests";
import AppHeader from "./components/layout/AppHeader";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";
import { createElement, useState } from "react";
import { Loading } from "carbon-components-react";
import AppContext from "./context/AppContext";

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

function PrivateRoute({ component, ...rest }) {
  const { user } = rest;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
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
  // get auth loading and user
  // put into loading when auth loading

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("ali");
  const appValue = {
    app: {
      loading,
      setLoading,
    },
    auth: {
      user,
      setUser,
    },
  };

  return (
    <div>
      <BrowserRouter>
        <LoadingBlur loading={loading}>
          <AppHeader auth={user} />
          <AppContext.Provider value={appValue}>
            <StoryContent>
              <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <PrivateRoute exact path="/" component={MyRequests} />
                <PrivateRoute path="/requestForm" component={RequestForm} />
              </Switch>
            </StoryContent>
          </AppContext.Provider>
        </LoadingBlur>
      </BrowserRouter>

      {/* <MyRequests /> */}
      {/* <RequestForm /> */}
    </div>
  );
}

export default App;
