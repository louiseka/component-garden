import styles from "./PlantGrowth.module.css";

import { useState } from "react";

export default function PlantGrowth() {
  const [count, setCount] = useState(0);
  const [watered, setWatered] = useState(false);
  const [killed, setKilled] = useState(true);
  const [message, setMessage] = useState("");

  const plantHeight = count * 10;

  const waterPlant = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 10) {
        setMessage("Yay! The plant is fully grown.");
        setWatered(true);
      } else {
        setMessage("Need more water!");
        setKilled(false);
      }
      return newCount;
    });
  };

  const killPlant = () => {
    setCount((prev) => {
      const newCount = prev - 1;
      if (newCount === 0) {
        setMessage("Oh no! You've killed the plant");
        setKilled(true);
      } else {
        setMessage("You're killing the plant!");
        setWatered(false);
      }
      return newCount;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.plant_container}>
        <img
          style={{ "--height": `${count * 40}px` }}
          className={styles.plant_img}
          src="../images/seedling-icon.svg"
        />
      </div>
      <div className={styles.actions_container}>
        <p>{message}</p>
        <p>Plant Growth Component: {count}</p>
        {!watered && <button onClick={waterPlant}>Water Plant</button>}
        {!killed && <button onClick={killPlant}>Kill Plant</button>}
      </div>
    </div>
  );
}
