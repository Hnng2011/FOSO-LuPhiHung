import { create } from "zustand";

const useUserInfo = create<UserStore>((set) => ({
  user: undefined,
  setUserInfo: (info: UserInfo) => set({ user: info }),
}));

export default useUserInfo;
