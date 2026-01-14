import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "../../../../slices/PlantsSlice";
import CodeButton from "../../../Components/CodeButton/CodeButton";
import styles from "./WateringReminder.module.css";

export default function WateringReminder() {
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const plantName = e.target.elements.reminder.value;
    dispatch(addPlant(plantName.trim()));
    e.target.reset();
  };

  return (
    <section className={styles.wrapper}>
      <CodeButton
        href={
          "https://github.com/louiseka/component-garden/blob/main/src/components/StateManagement/Redux/WateringReminder/WateringReminder.jsx"
        }
      />
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.form_fieldset}>
            <label className={styles.form_label} htmlFor="reminder">
              Add a plant to your Watering Reminder list
            </label>
            <input
              className={styles.form_input}
              type="text"
              name="reminder"
              id="reminder"
              placeholder="Rose"
              required
            />
          </fieldset>
          <button type="submit" className={styles.form_button}>
            Add a reminder
          </button>
        </form>
      </div>
      <div className={styles.list}>
        <h3>Remember to water</h3>

        <ul>
          {plants.map((plant) => (
            <li key={plant}>{plant}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
