import PlantWishlist from "../../components/StateManagement/Zustand/PlantWishlist";
import CodeButton from "../../components/Components/CodeButton/CodeButton";

import styles from "./Zustand.module.css";

export default function Zustand() {
  return (
    <section>
      <h3 className={styles.subHeading}>Your plant wishlist</h3>
      <div className={styles.textContainer}>
        <p>
          A form-based component that lets users add plants to a wishlist using
          Zustand for state management. New plants are added instantly and
          displayed in a styled list.
        </p>
        <CodeButton
          href={
            "https://github.com/louiseka/component-garden/blob/main/src/components/StateManagement/Zustand/PlantWishlist.jsx"
          }
        />
      </div>
      <div className={styles.componentContainer}>
        <PlantWishlist />
      </div>
    </section>
  );
}
