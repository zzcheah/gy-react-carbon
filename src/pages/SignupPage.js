import { useContext, useState } from "react";
import { Button, Form, TextInput } from "carbon-components-react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const style = {
  container: {
    paddingTop: "30px",
    display: "flex",
    flexWrap: "wrap",
  },
  box: {
    width: "100%",
    display: "flex",
  },
  child: {
    marginBottom: "15px",
    marginRight: "20px",
    display: "flex",
  },
  button: {
    marginTop: "40px",
  },
};

const SignupPage = () => {
  const { appState, dispatch, addToast } = useContext(AppContext);
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });

  if (appState.auth) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_LOADING" });
    fetch("https://jsonplaceholder.typicode.com/todos/1") // change to signup API
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          console.log(json);
          addToast("success", "Successfully Registered");
          dispatch({ type: "TOGGLE_LOADING" });
          history.push("/login");
        }, 2000); // mimic delay in registering
      })
      .catch((err) => {
        console.log(err);
        appState.addToast("error", "err");
        dispatch({ type: "TOGGLE_LOADING" });
      });
  };

  return (
    <>
      <h1>Create an account</h1>
      <div style={{ margin: "15px 0 15px 0" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div style={style.container}>
          <div style={{ width: "400px", ...style.child }}>
            <TextInput
              id="name"
              autoComplete="name"
              required
              labelText="Name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "280px", ...style.child }}>
            <TextInput
              id="email"
              autoComplete="email"
              required
              labelText="Email"
              value={newUser.email}
              type="email"
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "100%", ...style.child }} />
          <div style={{ width: "280px", ...style.child }}>
            <TextInput.PasswordInput
              id="password"
              labelText="Password"
              required
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "200px", ...style.child }}>
            <TextInput
              id="tel"
              autoComplete="tel"
              required
              labelText="Phone number"
              value={newUser.tel}
              type="tel"
              onChange={handleChange}
            />
          </div>
        </div>

        <Button type="submit" style={style.button}>
          Create Account
        </Button>
      </Form>
    </>
  );
};

export default SignupPage;
