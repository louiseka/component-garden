import { NavLink, Outlet } from "react-router-dom";

import styles from "./StateManagement.module.css";

export default function StateManagement() {
  return (
    <section className={styles.wrapper}>
      <p>StateManagement Page</p>
      <nav className={styles.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
          to="redux"
        >
          Redux
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
          to="zustand"
        >
          Zustand
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
          to="usecontext"
        >
          useContext
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
