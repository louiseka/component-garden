import styles from "./SiteHeader.module.css";
import SiteNav from "../SiteNav/SiteNav";

export default function SiteHeader() {
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
      <SiteNav />
    </header>
  );
}
