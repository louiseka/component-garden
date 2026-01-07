import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", url: "/" },
    // { label: "Components", url: "/components" },
    { label: "Hooks", url: "/hooks" },
    { label: "Forms", url: "/forms" },
    { label: "State Management", url: "/state-management" },
  ];

  return (
    <nav className={styles.menu}>
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <FaBars aria-hidden="true" /> Menu
      </button>
      <ul className={`${styles.menuList} ${isOpen ? styles.isVisible : ""}`}>
        {navLinks.map((navLink) => (
          <li key={navLink.url}>
            <NavLink
              to={navLink.url}
              className={({ isActive }) =>
                `${styles.link} ${
                  isActive ? styles.activeLink : styles.inactiveLink
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
