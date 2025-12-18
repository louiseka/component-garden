import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ title, imgUrl, path }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src="./images/flower.svg" />

      <h4 className={styles.cardTitle}>{title}</h4>
      <Link className={styles.cardLink} to={path}>
        View Component
      </Link>
    </div>
  );
}
