import WateringReminder from "../../components/Hooks/useEffect/WateringReminder";

import styles from "./UseEffect.module.css";

export default function UseEffect() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h3>Remember to water your plant!</h3>
        <p>
          Uses useEffect with setTimeout to show a reminder after 5 seconds of
          inactivity and setInterval to run a live timer, demonstrating timed
          side effects and dynamic UI updates in React.
        </p>
      </div>
      <div className={styles.componentContainer}>
        <WateringReminder />
      </div>
    </div>
  );
}
