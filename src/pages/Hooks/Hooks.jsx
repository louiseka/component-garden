import styles from "./Hooks.module.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Hooks() {
  return (
    <div className={styles.wrapper}>
      <p>Hooks page</p>
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
  );
}
