import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ user, newUser }) {
  const [createData, setCreateData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [frontendErrors, setFrontendErrors] = useState([]);

  const navigate = useNavigate();

  function loginFormChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function createFormChange(e) {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
    validate(e);
  }

  function validate(e) {
    const { name, value } = e.target;

    setFrontendErrors((frontendErrors) => ({ ...frontendErrors, [name]: "" }));
    setErrors([]);

    switch (name) {
      case "username":
        if (value.length > 0 && (value.length < 9 || value.length > 30)) {
          setFrontendErrors((err) => ({
            ...err,
            [name]: "Must be between 9 and 30 characters",
          }));
        }
        break;
      case "password":
        if (value.length > 0 && (value.length <= 6 || value.length > 16)) {
          setFrontendErrors((frontendErrors) => ({
            ...frontendErrors,
            [name]: "Password must be between 6 and 16 characters",
          }));
        } else {
          if (
            value.length > 0 &&
            createData.password_confirmation &&
            value !== createData.password_confirmation
          ) {
            setFrontendErrors((err) => ({
              ...err,
              [name]: "Passwords must match",
            }));
          }
        }
        break;
      case "password_confirmation":
        if (
          value.length > 0 &&
          createData.password.length >= 6 &&
          createData.password.length <= 16 &&
          createData.password !== value
        ) {
          setFrontendErrors((frontendErrors) => ({
            ...frontendErrors,
            [name]: "Passwords must match",
          }));
        }
        break;
      default:
        return;
    }
  }

  function handleCreate(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => newUser(data));
        navigate("/account");
      } else {
        res.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => newUser(user));
        navigate("/account");
      } else {
        r.json().then((err) => setErrors([err.error]));
      }
    });
  }

  return (
    <div className={styles.loginBox}>
      <form className={styles.login} onSubmit={handleLogin}>
        <h1 className={styles.loginTitle}>Log in</h1>
        <div className={styles.field}>
          <label>Email / Handle</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={loginFormChange}
          ></input>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={loginFormChange}
          ></input>
        </div>
        <button type="submit" className={styles.loginBtn}>
          Log in
        </button>
      </form>
      <p>
        <i>or</i>
      </p>
      {errors.map((err) => (
        <span key={err} className={styles.error}>
          {err}
        </span>
      ))}
      <form className={styles.create} onSubmit={handleCreate}>
        <h1 className={styles.createTitle}>Create an account</h1>
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="username"
            onChange={createFormChange}
          ></input>
          <div>{frontendErrors.username}</div>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={createFormChange}
          ></input>
          <div>{frontendErrors.password}</div>
        </div>
        <div className={styles.field}>
          <label>Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            onChange={createFormChange}
          ></input>
          <div>{frontendErrors.password_confirmation}</div>
        </div>
        <button type="submit" className={styles.loginBtn}>
          Create account
        </button>
      </form>
    </div>
  );
}
