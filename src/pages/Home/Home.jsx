import styles from "./Home.module.css";
import Card from "../../components/Components/Card/Card";

export default function Home() {
  const cardData = [
    { title: "Water Flower", imgUrl: "", urlSlug: "" },
    { title: "Look after Flower", imgUrl: "", urlSlug: "" },
    { title: "Garden Gate", imgUrl: "", urlSlug: "" },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.heroBanner}>
        <h1 className={styles.header}>
          A garden where I grow React components.
        </h1>
        <p className={styles.tagline}>
          Learning, experimenting, and creating better code - one component at a
          time.
        </p>
      </div>

      <div className={styles.grid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
