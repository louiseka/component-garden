import { create } from "zustand";
import { useState } from "react";

import styles from "./PlantWishlist.module.css";

const usePlantStore = create((set) => ({
  plants: ["Monstera"],
  addPlant: (plant) => set((state) => ({ plants: [...state.plants, plant] })),
}));

export default function PlantWishlist() {
  const { plants, addPlant } = usePlantStore();
  const [newPlant, setNewPlant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlant.trim() === "") return;
    addPlant(newPlant.trim());
    setNewPlant("");
  };

  return (
    <section className={styles.wrapper}>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.form_fieldset}>
            <label className={styles.form_label} htmlFor="wishlist">
              Add a plant to your wishlist:
            </label>
            <input
              className={styles.form_input}
              type="text"
              placeholder="Daisy"
              value={newPlant}
              onChange={(e) => setNewPlant(e.target.value)}
              name="wishlist"
              id="wishlist"
              required
            />
          </fieldset>
          <button className={styles.form_button} type="submit">
            Add Plant
          </button>
        </form>
      </div>
      <div className={styles.list}>
        <h3>Your plant wishlist</h3>
        <ul>
          {plants.map((plant) => (
            <li key={plant}>{plant}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
