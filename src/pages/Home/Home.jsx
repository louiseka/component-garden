import styles from "./Home.module.css";
import Card from "../../components/Components/Card/Card";

export default function Home() {
  const cardData = [
    {
      title: "Grow your Plant",
      description:
        "useState and conditional rendering to simulate a plant growing or dying based on user actions.",
      imgUrl: "",
      path: "/hooks/usestate",
    },
    {
      title: "Remember to water!",
      description:
        "Demonstrating timed side effects and dynamic UI updates in React.",
      imgUrl: "",
      path: "/hooks/useeffect",
    },
    {
      title: "Garden Gate",
      description:
        "Handling controlled inputs, basic form validation, and conditional rendering in React.",
      imgUrl: "",
      path: "/forms",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.heroBanner}>
        <h1 className={styles.header}>
          A garden where I grow React components.
        </h1>
        <p className={styles.tagline}>
          A collection of React components presented as a growing garden -
          explore real examples of state management, hooks, forms, and user
          interface logic in action.
        </p>
      </div>

      <div className={styles.grid}>
        {cardData.map((data) => (
          <Card
            key={crypto.randomUUID()}
            title={data.title}
            description={data.description}
            imgUrl={data.imgUrl}
            path={data.path}
          />
        ))}
      </div>
    </section>
  );
}
