import { create } from 'zustand';
import { formatCpf } from '../utils/cpfFormatter';

const useRegisterCpf = create((set, get) => ({
  cpfUser: '',

  setCpf: (value) => set({ cpfUser: value }),

  setCpfUser: (value) => {
    const digitsOnly = get().cpfUser.replace(/\D/g, '') + value;
    const formattedCpf = formatCpf(digitsOnly);

    set({ cpfUser: formattedCpf });
  },

  deleteDigit: () => {
    const digitsOnly = get().cpfUser.replace(/\D/g, '');
    const newCpf = digitsOnly.substring(0, digitsOnly.length - 1);
    const formattedCpf = formatCpf(newCpf);

    set({ cpfUser: formattedCpf });
  },
}));

export default useRegisterCpf;
