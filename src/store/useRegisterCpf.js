import { create } from "zustand";
import { formatCpf } from "../utils/cpfFormatter";

const useRegisterCpf = create((set) => ({
  cpfUser: null,

  setCpfUser: (value) => set({ cpfUser: value }),

  getCpf: (value) => {
    const digitsOnly = get().cpfText.replace(/\D/g, "") + value;
    let formattedCpf = formatCpf(digitsOnly);

    set({ cpfText: formattedCpf });
  },

  deleteDigit: (value) => {
    const digitsOnly = get().cpfText.replace(/\D/g, "") + value;
    const newCpf = digitsOnly.substring(0, digitsOnly.length - 1);
    let formattedCpf = formatCpf(newCpf);

    set({ cpfText: formattedCpf });
  },
}));

export default useRegisterCpf;
