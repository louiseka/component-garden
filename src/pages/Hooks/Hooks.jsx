import styles from "./Hooks.module.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Hooks() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Hooks</h1>
      <p className={styles.tagline}>
        Watch components grow and respond over time using useState and
        useEffect. These examples show how state changes and side effects work
        together to create dynamic, reactive UIs.
      </p>
      <div>
        <nav className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
            to="usestate"
          >
            useState
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
            to="useeffect"
          >
            useEffect
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
