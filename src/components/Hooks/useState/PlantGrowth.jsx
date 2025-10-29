import { useState } from "react";

export default function PlantGrowth() {
  const [count, setCount] = useState(0);
  const [watered, setWatered] = useState(false);

  return (
    <div>
      <h3>Water the Plant</h3>
      <p>Plant Growth Component: {count}</p>
      <button onClick={() => setCount(count + 1)}>Water Plant</button>
    </div>
  );
}
