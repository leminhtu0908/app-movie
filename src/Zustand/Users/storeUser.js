import create from 'zustand';

const useUserStore = create((set) => ({
  user: {
    username: 'khangdeptrai',
  },
  changeUsername: (username) => set({ user: { username } }),
}));

export default useUserStore;
