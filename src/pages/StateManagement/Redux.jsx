import { Provider } from "react-redux";
import { store } from "../../state/store";

import WateringReminder from "../../components/StateManagement/Redux/WateringReminder/WateringReminder";
import styles from "./Redux.module.css";

import RandomFox from "../../components/StateManagement/Redux/RandomFox/RandomFox";

export default function Redux() {
  return (
    <section>
      <div className={styles.textContainer}>
        <h3>Your watering reminder</h3>
        <p>
          Watering Reminder lets users add plant reminders. It uses Redux
          Toolkit to manage the global list of plants, with useSelector to read
          state and useDispatch to add new plants efficiently.
        </p>
      </div>
      <div className={styles.componentContainer}>
        <Provider store={store}>
          <WateringReminder />
        </Provider>
      </div>
      <div className={styles.textContainer}>
        <h3>Look, there's a fox in the Garden!</h3>
        <p>....</p>
      </div>
      <div className={styles.componentContainer}>
        <Provider store={store}>
          <RandomFox />
        </Provider>
      </div>
    </section>
  );
}
