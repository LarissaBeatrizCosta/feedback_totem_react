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

  /**
   * Updates the recommendation rating in the store.
   *
   * @param {number} newRecommendationRating - The new recommendation rating to be set.
   */
  setRecommendationRating: (newRecommendationRating) =>
    set({ recommendationRating: newRecommendationRating }),

  /**
   * Updates the star rating of the environment in the store.
   *
   * @param {number} newStarRating - The new star rating of the environment to be set.
   */
  setStarEnvironmentRating: (newStarEnvironmentRating) =>
    set({ starEnvironmentRating: newStarEnvironmentRating }),

  /**
   * Updates the star rating of the collaborator in the store.
   *
   * @param {number} newStarRating - The new star rating of the collaborator to be set.
   */
  setStarCollaboratorRating: (newStarCollaboratorRating) =>
    set({ starCollaboratorRating: newStarCollaboratorRating }),

  setStarTimeRating: (newStarTimeRating) =>
    set({ starTimeRating: newStarTimeRating }),
}));

export default useRatingStore;
