import { Outlet } from "react-router-dom";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
}
