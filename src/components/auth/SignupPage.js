import { Button, TextInput } from "carbon-components-react";
import { useContext, useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

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
  const appContext = useContext(AppContext);
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });

  if (appContext.auth.user) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Create an account</h1>
      <div style={{ margin: "15px 0 15px 0" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <hr />
      <div style={style.container}>
        <div style={{ width: "400px", ...style.child }}>
          <TextInput
            id="name"
            autoComplete="name"
            labelText="Name"
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        <div style={{ width: "280px", ...style.child }}>
          <TextInput
            id="email"
            autoComplete="email"
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
            value={newUser.password}
            onChange={handleChange}
          />
        </div>
        <div style={{ width: "200px", ...style.child }}>
          <TextInput
            id="tel"
            autoComplete="tel"
            labelText="Phone number"
            value={newUser.tel}
            type="tel"
            onChange={handleChange}
          />
        </div>
      </div>

      <Button style={style.button} onClick={() => history.push("/")}>
        Create Account
      </Button>
    </div>
  );
};

export default SignupPage;
