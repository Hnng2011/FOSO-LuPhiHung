import { create } from "zustand";

const useDashboardStore = create<DashboardStore>((set) => ({
  mainDashboardInfo: [],
  setMainDashboardInfo: (info: MainDashboardInfo[]) =>
    set({ mainDashboardInfo: info }),
}));

export default useDashboardStore;
