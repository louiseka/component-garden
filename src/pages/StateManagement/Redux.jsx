import { Provider } from "react-redux";
import { store } from "../../state/store";

import WateringReminder from "../../components/StateManagement/Redux/WateringReminder";

export default function Redux() {
  return (
    <section>
      <p>This is Redux page</p>
      <Provider store={store}>
        <WateringReminder />
      </Provider>
    </section>
  );
}
