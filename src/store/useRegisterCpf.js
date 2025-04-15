import { create } from "zustand";
import { formatCpf } from "../utils/cpfFormatter";

const useRegisterCpf = create((set, get) => ({
  cpfUser: "",

  setCpfUser: (value) => {
    const digitsOnly = get().cpfUser.replace(/\D/g, "") + value;
    let formattedCpf = formatCpf(digitsOnly);

    set({ cpfUser: formattedCpf });
  },

  deleteDigit: () => {
    const digitsOnly = get().cpfUser.replace(/\D/g, "");
    const newCpf = digitsOnly.substring(0, digitsOnly.length - 1);
    let formattedCpf = formatCpf(newCpf);

    set({ cpfUser: formattedCpf });
  },
}));

export default useRegisterCpf;
