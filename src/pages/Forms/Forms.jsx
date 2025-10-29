import styles from "./Forms.module.css";
import LoginForm from "../../components/Forms/LoginForm";

export default function Forms() {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
}
