import styles from "./Forms.module.css";
import LoginForm from "../../components/Forms/LoginForm";

export default function Forms() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Forms</h1>
      <p className={styles.tagline}>
        A simple login form where user input takes root. This example shows how
        form state, validation, and submission work together in a clean,
        predictable flow.
      </p>
      <div className={styles.componentContainer}>
        <div className={styles.text}>
          <h3 className={styles.header}>GardenGate</h3>
          <p className={styles.text_highlighted}>
            The main gate - where users "enter the garden". Or more popularily
            known as a login component.
          </p>
          <p>
            This Login Form demonstrates handling controlled inputs, basic form
            validation, and conditional rendering in React.
          </p>
          <p>You can use the following login details to test the component:</p>

          <p>
            <span className={styles.text_bold}>Email:</span> test@email.com
          </p>
          <p>
            <span className={styles.text_bold}>Password: </span>password
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
