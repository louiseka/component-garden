import PlantWishlist from "../../components/StateManagement/Zustand/PlantWishlist";
import styles from "./Zustand.module.css";

export default function Zustand() {
  return (
    <section>
      <div className={styles.text}>
        <h3>Remember to water your plant!</h3>
        <p>
          A form-based component that lets users add plants to a shared wishlist
          using Zustand for state management. New plants are added instantly and
          displayed in a styled list.
        </p>
      </div>
      <PlantWishlist />
    </section>
  );
}
