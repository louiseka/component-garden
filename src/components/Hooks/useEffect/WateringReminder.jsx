import { useState, useEffect } from "react";
import styles from "./WateringReminder.module.css";

export default function WateringReminder() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [watered, setWatered] = useState(true);

  //   To display message
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("You need to water your plant!");
      setWatered(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [count]);

  //To display timer
  useEffect(() => {
    const interval = setInterval(() => setSeconds((sec) => sec + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  //Watering plant
  const waterPlant = () => {
    setCount((c) => c + 1);
    setMessage("The plant looks happy!");
    setWatered(true);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.plant_container}>
        {!watered && (
          <img className={styles.plant_img} src="../images/seedling-icon.svg" />
        )}
        {watered && (
          <img src="../images/flower.svg" className={styles.flower_img}></img>
        )}
        <img
          className={styles.soil_img}
          src="../images/soil.svg"
          alt="Graphic of soil"
        ></img>
      </div>

      <div className={styles.content_container}>
        <div>
          <p>
            How long you've been looking after the plant:
            <span className={styles.text_bold}> {seconds} seconds </span>
          </p>
          <p>{message}</p>
        </div>
        {!watered && (
          <button className={styles.action_button} onClick={waterPlant}>
            Water plant
          </button>
        )}
      </div>
    </section>
  );
}
