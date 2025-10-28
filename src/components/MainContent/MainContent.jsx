import { Outlet } from "react-router-dom";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  );
}
