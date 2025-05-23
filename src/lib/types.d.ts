type UserInfo = {
  avatar?: string;
  name?: string;
  email?: string;
  bio?: string;
  followers?: number;
  following?: number;
  posts?: number;
};

interface UserStore {
  user?: UserInfo;
  setUserInfo: (info: UserInfo | undefined) => void;
}

interface DashboardStore {
  mainDashboardInfo: TotalData[];
  setMainDashboardInfo: (info: TotalData[]) => void;
}

// Define TypeScript interfaces for type safety
interface TotalData {
  date: string;
  submissions: number;
  totalUser: number;
  activePosts: number;
  reportedContents: number;
}

interface DashboardSectionData {
  id: number;
  name: string;
  describe: string;
}

interface DashboardData {
  total: TotalData[];
  pendingEvents: DashboardSectionData[];
  pendingSuppliers: DashboardSectionData[];
  reportedContents: DashboardSectionData[];
}

type Color = "blue" | "gray" | "white";

type Size = "sm" | "md" | "lg";
