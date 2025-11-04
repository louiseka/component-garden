import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "../../../state/store";

export default function WateringReminder() {
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Watering reminder component</p>
      <button onClick={() => dispatch(addPlant("Rose"))}>Add Rose</button>
      <ul>
        {plants.map((plant) => (
          <li key={plant}>{plant}</li>
        ))}
      </ul>
    </div>
  );
}
