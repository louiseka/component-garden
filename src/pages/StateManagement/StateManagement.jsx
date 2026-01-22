import { NavLink, Outlet } from "react-router-dom";

import styles from "./StateManagement.module.css";

export default function StateManagement() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>State Management</h1>
      <p className={styles.tagline}>
        Examples of managing and sharing state using Redux and Zustand. This
        page highlights common patterns for predictable updates, global state,
        and scalable data flow in React applications.
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
