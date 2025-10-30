import { create } from "zustand";
import { useState } from "react";

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
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wishlist">Add a plant to your wishlist:</label>
        <input
          type="text"
          placeholder="Daisy"
          value={newPlant}
          onChange={(e) => setNewPlant(e.target.value)}
          name="wishlist"
          id="wishlist"
          required
        />
        <button type="submit">Add Plant</button>
      </form>

      <ul>
        {plants.map((plant) => (
          <li key={plant}>{plant}</li>
        ))}
      </ul>
    </section>
  );
}
