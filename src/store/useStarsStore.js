import { create } from "zustand";

const useStarsStore = create((set) => ({
  starEnvironmentRating: null,
  starCollaboratorRating: null,
  starTimeRating: null,

  setStarEnvironmentRating: (value) => set({ starEnvironmentRating: value }),

  setStarCollaboratorRating: (value) => set({ starCollaboratorRating: value }),

  setStarTimeRating: (value) => set({ starTimeRating: value }),
}));

export default useStarsStore;
