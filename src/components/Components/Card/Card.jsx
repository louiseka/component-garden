import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src="./images/flower.svg" />

      <h4 className={styles.cardTitle}>Card Title</h4>
      <a className={styles.cardLink} href="#">
        View Component
      </a>
    </div>
  );
}
