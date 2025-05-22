type UserInfo = {
  avatar?: string;
  name: string;
  email: string;
};

interface UserStore {
  user?: UserInfo;
  setUserInfo: (info: UserInfo | undefined) => void;
}

type MainDashboardInfo = {
  submissions: number;
  totalUser: number;
  activePost: number;
  reportedContent: number;
};

interface DashboardStore {
  mainDashboardInfo: MainDashboardInfo[];
  setMainDashboardInfo: (info: MainDashboardInfo[]) => void;
}

// Define TypeScript interfaces for type safety
interface TotalData {
  submissions: number;
  totalUser: number;
  activePosts: number;
  reportedContents: number;
}

interface EventData {
  id: number;
  name: string;
  describe: string;
}

interface SupplierData {
  id: number;
  name: string;
  describe: string;
}

interface DashboardData {
  total: TotalData;
  pendingEvents: EventData[];
  pendingSuppliers: SupplierData[];
}

type Color = "blue" | "gray" | "white";

type Size = "sm" | "md" | "lg";
