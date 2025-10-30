import { useState, useEffect } from "react";

export default function WateringReminder() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //   To display message
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("You need to water your plant!");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [count]);

  //To display timer
  useEffect(() => {
    const interval = setInterval(() => setSeconds((sec) => sec + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const waterPlant = () => {
    setCount((c) => c + 1);
    setMessage("The plant looks happy!");
  };

  return (
    <section>
      <p>How long you've been looking after the plant: {seconds} seconds </p>
      <p>{message}</p>
      <button onClick={waterPlant}>Water plant</button>
    </section>
  );
}
