import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <h3 className={styles.form_header}>Login to your account</h3>
      <fieldset className={styles.form_fieldset}>
        <label className={styles.form_label} htmlFor="email">
          Enter your email address:
        </label>
        <input
          className={styles.form_input}
          name="email"
          id="email"
          type="email"
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
        ></input>
      </fieldset>
      <button className={styles.form_button} type="submit">
        Login
      </button>
    </form>
  );
}
