import styles from "./Home.module.css";
import Card from "../../components/Components/Card/Card";

export default function Home() {
  const cardData = [
    { title: "Water the Flower", imgUrl: "", path: "/hooks/usestate" },
    { title: "Look after Flower", imgUrl: "", path: "/hooks/useeffect" },
    { title: "Garden Gate", imgUrl: "", path: "/forms" },
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
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            imgUrl={data.imgUrl}
            path={data.path}
          />
        ))}
      </div>
    </section>
  );
}
