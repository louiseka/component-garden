import { NavLink, Outlet } from "react-router-dom";

import styles from "./StateManagement.module.css";

export default function StateManagement() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>StateManagement</h1>
      <p className={styles.tagline}>
        This project is still a work in progress...But here is a collection of
        React components presented as a growing garden - explore real examples
        of state management, hooks, forms, and user interface logic in action.
      </p>
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
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
          to="usecontext"
        >
          useContext
        </NavLink> */}
      </nav>
      <Outlet />
    </section>
  );
}
