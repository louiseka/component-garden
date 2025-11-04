import { Provider } from "react-redux";
import { store } from "../../state/store";

import WateringReminder from "../../components/StateManagement/Redux/WateringReminder";
import styles from "./Redux.module.css";

export default function Redux() {
  return (
    <section>
      <div className={styles.text}>
        <h3>Your watering reminder</h3>
        <p>
          Watering Reminder lets users add plant reminders. It uses Redux
          Toolkit to manage the global list of plants, with useSelector to read
          state and useDispatch to add new plants efficiently.
        </p>
      </div>
      <Provider store={store}>
        <WateringReminder />
      </Provider>
    </section>
  );
}
