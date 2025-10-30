import PlantGrowth from "../../components/Hooks/useState/PlantGrowth";
import styles from "./UseState.module.css";

export default function UseState() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h3>Water the Plant</h3>

        <p>
          An interactive React component that uses useState and conditional
          rendering to simulate a plant growing or dying based on user actions.
          Click the 'Water Plant' button to make the plant grow.
        </p>
      </div>

      <PlantGrowth />
    </div>
  );
}
