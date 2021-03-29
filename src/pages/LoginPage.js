import { Button, Form, TextInput } from "carbon-components-react";
import { useContext, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { authenticateUser } from "../service/AuthService";

const style = {
  container: { paddingTop: "30px" },
  child: {
    marginBottom: "15px",
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
};

const LoginPage = () => {
  const { appState, addToast, dispatch } = useContext(AppContext);
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  if (appState.auth) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const props = {
      credentials,
      dispatch,
      history,
      addToast,
    };

    authenticateUser(props);
  };

  return (
    <>
      <h1>Log in</h1>
      <div style={{ margin: "15px 0 15px 0" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div style={style.container}>
          <div style={{ width: "280px", ...style.child }}>
            <TextInput
              id="email"
              autoComplete="email"
              required
              labelText="Email"
              value={credentials.email}
              type="email"
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "280px", ...style.child }}>
            <TextInput.PasswordInput
              id="password"
              required
              labelText="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button style={style.button} type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
