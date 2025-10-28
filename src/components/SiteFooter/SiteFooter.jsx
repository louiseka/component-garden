import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.wrapper}>
      <h4>Component Garden </h4>
      <p>
        Component Garden is a personal React playground for exploring UI, hooks,
        and design concepts. Built by Louise Aldridge
      </p>
    </footer>
  );
}
