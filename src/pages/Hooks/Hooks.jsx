import styles from "./Hooks.module.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Hooks() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Hooks</h1>
      <p className={styles.tagline}>
        This project is still a work in progress...But here is a collection of
        React components presented as a growing garden - explore real examples
        of state management, hooks, forms, and user interface logic in action.
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
