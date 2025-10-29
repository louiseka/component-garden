import PlantGrowth from "../../components/Hooks/useState/PlantGrowth";
import styles from "./UseState.module.css";

export default function UseState() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h3>Water the Plant</h3>

        <p>This is useState page</p>
      </div>

      <PlantGrowth />
    </div>
  );
}
