import { FaPlus, FaDroplet, FaSeedling } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "../../../../slices/PlantsSlice";
import styles from "./WateringReminder.module.css";

export default function WateringReminder() {
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let plantName = e.target.elements.reminder.value.trim();
    plantName = plantName.charAt(0).toUpperCase() + plantName.slice(1);
    dispatch(addPlant(plantName));
    e.target.reset();
  };

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.containerHeadings}>Remember to water</h3>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.form_fieldset}>
            <label className={styles.form_label} htmlFor="reminder">
              Add a plant
            </label>
            <input
              className={styles.form_input}
              type="text"
              name="reminder"
              id="reminder"
              placeholder="E.g. Roses, Potatoes, Strawberries.."
              required
            />
          </fieldset>
          <button type="submit" className={styles.form_button}>
            <FaPlus />
            Add a reminder
          </button>
        </form>
      </div>
      {plants.length > 0 && (
        <div className={styles.list}>
          <h4 className={styles.containerHeadings}>Reminders</h4>
          <ul>
            {plants.map((plant) => (
              <li className={styles.listItem} key={plant}>
                <span className={styles.iconContainer}>
                  <FaSeedling className={styles.seedIcon} />
                  {plant}
                </span>
                <FaDroplet className={styles.dropletIcon} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
