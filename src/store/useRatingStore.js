import { create } from "zustand";

const useRatingStore = create((set) => ({
  recommendationRating: null,
  starEnvironmentRating: null,
  starCollaboratorRating: null,
  starTimeRating: null,

  /**
   * Updates the recommendation rating in the store.
   *
   * @param {number} newRecommendationRating - The new recommendation rating to be set.
   */


  setRecommendationRating: (value) =>
    set({ recommendationRating: value }),


  setStarEnvironmentRating: (value) =>
    set((state) => ({starEnvironmentRating: value })),


  setStarCollaboratorRating: (value) =>
    set({ starCollaboratorRating: value }),

  setStarTimeRating: (value) =>
    set({ starTimeRating: value }),
}));

export default useRatingStore;
