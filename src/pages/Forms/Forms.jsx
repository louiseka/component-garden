import styles from "./Forms.module.css";
import LoginForm from "../../components/Forms/LoginForm";

export default function Forms() {
  return (
    <section className={styles.wrapper}>
      <div>
        <LoginForm />
      </div>
      <div className={styles.text}>
        <h2 className={styles.header}>GardenGate</h2>
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
    </section>
  );
}
