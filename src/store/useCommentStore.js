import { create } from 'zustand';

const useCommentStore = create((set) => ({
  comment: '',

  setComment: (value) => set({ comment: value }),
}));

export default useCommentStore;
