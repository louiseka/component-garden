import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.header}>
            A garden where I grow React components.
          </h1>
          <p>
            Learning, experimenting, and cultivating better code—one component
            at a time.
          </p>
          <button className={styles.ctaButton}>Explore the Garden</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.blob}></div>
          <img
            className={styles.seedlingImage}
            src="/images/seedling-icon.svg"
          />
        </div>
      </div>
      <div>
        <h2>React Garden Showcase</h2>
        <div></div>
      </div>
    </section>
  );
}
