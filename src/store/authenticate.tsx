import { create } from "zustand";

const useUserInfo = create<UserStore>((set) => ({
  user: undefined,
  setUserInfo: (info: UserInfo | undefined) => set({ user: info }),
}));

export default useUserInfo;
