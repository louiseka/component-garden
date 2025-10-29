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
    <div>
      <h3>Water the Plant</h3>
      <p>{message}</p>
      <p>Plant Growth Component: {count}</p>
      <img
        style={{ "--height": `${count * 50}px` }}
        className={styles.plant_img}
        src="../images/seedling-icon.svg"
      />
      {!watered && <button onClick={waterPlant}>Water Plant</button>}
      {!killed && <button onClick={killPlant}>Kill Plant</button>}
    </div>
  );
}
