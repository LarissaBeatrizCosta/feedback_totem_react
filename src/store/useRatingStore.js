import { create } from "zustand";

const useRatingStore = create((set) => ({
  recommendationRating: null,

  setRecommendationRating: (value) => set({ recommendationRating: value }),
}));

export default useRatingStore;
