import PlantGrowth from "../../components/Hooks/useState/PlantGrowth";
import styles from "./UseState.module.css";
import CodeButton from "../../components/Components/CodeButton/CodeButton";

export default function UseState() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subHeading}>Water the Plant </h3>
      <div className={styles.textContainer}>
        <p>
          An interactive React component that uses useState and conditional
          rendering to simulate a plant growing or dying based on user actions.
          Click the 'Water Plant' button to make the plant grow.
        </p>
        <CodeButton
          href={
            "https://github.com/louiseka/component-garden/blob/main/src/components/Hooks/useState/PlantGrowth.jsx"
          }
        />
      </div>
      <div className={styles.componentContainer}>
        <PlantGrowth />
      </div>
    </div>
  );
}
