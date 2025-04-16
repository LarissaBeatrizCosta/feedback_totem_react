import { create } from "zustand";

const useUserStore = create((set) => ({
  email: "",
  setEmail: (value) => set({ email: value }),
}));
export default useUserStore;
