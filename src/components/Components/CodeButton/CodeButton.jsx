import { FaCode } from "react-icons/fa6";
import styles from "./CodeButton.module.css";

export default function CodeButton({ href }) {
  return (
    <a className={styles.codeButton} href={href} target="_blank">
      <FaCode />
      View the code
    </a>
  );
}
