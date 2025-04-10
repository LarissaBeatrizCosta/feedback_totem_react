import { create } from "zustand";

const useRatingStore = create((set) => ({
  rating: null,
  setRating: (newRating) => set({ rating: newRating }),
}));
export default useRatingStore;
