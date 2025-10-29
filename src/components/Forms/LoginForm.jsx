import styles from "./LoginForm.module.css";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Whoops, you need to enter your login details, to login. ");
    }

    if (email === "test@email.com" && password === "password") {
      setMessage("You have logged in successfully!");
      setLoggedIn(true);
    } else {
      setMessage("Your login credentials were not correct!");
    }
  };

  return (
    <div className={styles.wrapper}>
      {loggedIn && (
        <div>
          <h3 className={styles.header}>Welcome back!</h3>
          <p className={styles.message}>{message}</p>
        </div>
      )}
      {!loggedIn && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.header}>Login to your account</h3>
          {message && <p className={styles.message}>{message}</p>}
          <fieldset className={styles.form_fieldset}>
            <label className={styles.form_label} htmlFor="email">
              Enter your email address:
            </label>
            <input
              className={styles.form_input}
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </fieldset>
          <fieldset className={styles.form_fieldset}>
            <label className={styles.form_label} htmlFor="password">
              Enter your password:
            </label>
            <input
              className={styles.form_input}
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </fieldset>
          <button className={styles.form_button} type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
