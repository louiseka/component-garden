import styles from "./Forms.module.css";
import LoginForm from "../../components/Forms/LoginForm";

export default function Forms() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Forms</h1>
      <p className={styles.tagline}>
        This project is still a work in progress...But here is a collection of
        React components presented as a growing garden - explore real examples
        of state management, hooks, forms, and user interface logic in action.
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
