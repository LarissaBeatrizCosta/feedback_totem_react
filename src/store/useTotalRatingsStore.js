import { create } from "zustand";

const useTotalRatings = create((set) => ({
  totalRatings: [],
  setTotalRatingsList: (value) =>
    set((state) => ({ totalRatings: [...state.totalRatings, value] })),
}));

export default useTotalRatings;
