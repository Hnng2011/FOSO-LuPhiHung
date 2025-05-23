import { create } from "zustand";

const useDashboardStore = create<DashboardStore>((set) => ({
  mainDashboardInfo: [],
  setMainDashboardInfo: (info: TotalData[]) => set({ mainDashboardInfo: info }),
}));

export default useDashboardStore;
