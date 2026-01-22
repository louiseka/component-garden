import styles from "./UseEffect.module.css";

import WateringReminder from "../../components/Hooks/useEffect/WateringReminder";
import CodeButton from "../../components/Components/CodeButton/CodeButton";

export default function UseEffect() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.subHeading}>Remember to water your plant!</h3>

      <div className={styles.textContainer}>
        <p>
          Uses useEffect with setTimeout to show a reminder after 5 seconds of
          inactivity and setInterval to run a live timer, demonstrating timed
          side effects and dynamic UI updates in React.{" "}
        </p>
        <CodeButton
          href={
            "https://github.com/louiseka/component-garden/blob/main/src/components/Hooks/useEffect/WateringReminder.jsx"
          }
        />
      </div>
      <div className={styles.componentContainer}>
        <WateringReminder />
      </div>
    </div>
  );
}
