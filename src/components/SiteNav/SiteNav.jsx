import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

export default function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Components", url: "/components" },
    { label: "Hooks", url: "/hooks" },
    { label: "Forms", url: "/forms" },
  ];

  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
