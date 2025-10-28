import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.heading}>Component Garden</h1>
      <img
        className={styles.icon}
        src="../public/images/seedling-icon.svg"
        alt="Green icon of a seedling"
      />
    </header>
  );
}
