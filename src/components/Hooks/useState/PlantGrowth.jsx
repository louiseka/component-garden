import { useState } from "react";

export default function PlantGrowth() {
  const [count, setCount] = useState(0);
  const [watered, setWatered] = useState(false);

  return (
    <div>
      <h3>Water the Plant</h3>
      <p>Plant Growth Component: {count}</p>
      <img src="../images/seedling-icon.svg" />
      <button onClick={() => setCount(count + 1)}>Water Plant</button>
      <button onClick={() => setCount(count - 1)}>Kill Plant</button>
    </div>
  );
}
