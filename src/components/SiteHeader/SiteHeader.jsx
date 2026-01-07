import styles from "./SiteHeader.module.css";
import SiteNav from "../SiteNav/SiteNav";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 526);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 526);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <h1 className={styles.heading}>Component Garden</h1>
        <img
          className={styles.icon}
          src="/images/seedling-icon.svg"
          alt="Green icon of a seedling"
        />
      </div>
      {isMobile ? <HamburgerMenu /> : <SiteNav />}
    </header>
  );
}
