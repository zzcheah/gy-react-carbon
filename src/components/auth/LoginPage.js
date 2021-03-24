import { Button, TextInput } from "carbon-components-react";
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AppContext from "../../context/AppContext";

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
  const appContext = useContext(AppContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  if (appContext.auth.user) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Log in</h1>
      <div style={{ margin: "15px 0 15px 0" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <hr />
      <div style={style.container}>
        <div style={{ width: "280px", ...style.child }}>
          <TextInput
            id="email"
            autoComplete="email"
            labelText="Email"
            value={credentials.email}
            type="email"
            onChange={handleChange}
          />
        </div>
        <div style={{ width: "280px", ...style.child }}>
          <TextInput.PasswordInput
            id="password"
            labelText="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <Button style={style.button} onClick={() => console.log(credentials)}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
