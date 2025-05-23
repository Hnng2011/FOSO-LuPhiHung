"use client";

import { ActionCard } from "@/components/ui/action-card";
import { Badge } from "@/components/layouts/badge";

import { useEffect, useState } from "react";
import { Area, AreaChart } from "recharts";
import { ChevronDown } from "lucide-react";
import Modal from "@/components/layouts/modal";

const mockData: DashboardData = {
  total: [
    {
      date: "2025-05-21",
      submissions: 15,
      totalUser: 25,
      activePosts: 40,
      reportedContents: 3,
    },
    {
      date: "2025-05-20",
      submissions: 12,
      totalUser: 20,
      activePosts: 35,
      reportedContents: 5,
    },
    {
      date: "2025-05-19",
      submissions: 25,
      totalUser: 25,
      activePosts: 25,
      reportedContents: 5,
    },
    {
      date: "2025-05-18",
      submissions: 15,
      totalUser: 25,
      activePosts: 25,
      reportedContents: 5,
    },
    {
      date: "2025-05-17",
      submissions: 50,
      totalUser: 50,
      activePosts: 50,
      reportedContents: 50,
    },
    {
      date: "2025-05-16",
      submissions: 30,
      totalUser: 30,
      activePosts: 30,
      reportedContents: 30,
    },
    {
      date: "2025-05-15",
      submissions: 40,
      totalUser: 40,
      activePosts: 40,
      reportedContents: 40,
    },
    // ...more days
  ],
  pendingEvents: [
    { id: 1, name: "Event A", describe: "This is describe for event A" },
    { id: 2, name: "Event B", describe: "This is describe event B" },
    { id: 3, name: "Event C", describe: "This is describe event C" },
  ],
  pendingSuppliers: [
    { id: 1, name: "Supplier A", describe: "This is describe for supplier A" },
    { id: 2, name: "Supplier B", describe: "This is describe for supplier B" },
    { id: 3, name: "Supplier C", describe: "This is describe for supplier C" },
  ],
  reportedContents: [
    { id: 1, name: "Content A", describe: "This is describe for content A" },
    { id: 2, name: "Content B", describe: "This is describe for content B" },
    { id: 3, name: "Content C", describe: "This is describe for content C" },
  ],
};

// Reusable Section component to reduce duplication
interface SectionProps {
  title: string;
  items: Array<{ id: number; name: string; describe: string }>;
}

function Section({ title, items }: SectionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  return (
    <>
      <Modal
        open={open}
        title={"View details"}
        description={modalContent}
        onYes={() => setOpen(false)}
      />

      <section className="flex flex-col w-full">
        <h3 className="text-2xl font-semibold ml-2 mb-4">{title}</h3>
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <ActionCard
                key={item.id}
                title={item.name}
                content={item.describe}
                action={{
                  label: "View",
                  func: () => {
                    setModalContent(item.describe);
                    setOpen(true);
                  },
                }}
              />
            ))
          ) : (
            <p className="text-gray-500 ml-2">
              No {title.toLowerCase()} available.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

// Optimized TotalSection to display total data correctly
function TotalSection({ total }: { total: TotalData[] }) {
  const [totalItems, setTotalItems] = useState<
    Array<{
      id: string;
      name: string;
      value: { date: string; value: number }[];
    }>
  >([]);

  useEffect(() => {
    setTimeout(() =>
      setTotalItems([
        {
          id: "submissions",
          name: "Total Submissions",
          value: total.map((item) => {
            return {
              date: item.date,
              value: item.submissions,
            };
          }),
        },
        {
          id: "totalUser",
          name: "Total Users",
          value: total.map((item) => {
            return {
              date: item.date,
              value: item.totalUser,
            };
          }),
        },
        {
          id: "activePosts",
          name: "Active Posts",
          value: total.map((item) => {
            return {
              date: item.date,
              value: item.activePosts,
            };
          }),
        },
        {
          id: "reportedContents",
          name: "Reported Contents",
          value: total.map((item) => {
            return {
              date: item.date,
              value: item.reportedContents,
            };
          }),
        },
      ])
    );
  }, []);

  return (
    <section className="flex flex-col w-full">
      <h3 className="text-2xl font-semibold ml-2 mb-4">Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {totalItems.map((item) => (
          <ActionCard
            key={item.id}
            title={item.name}
            content={
              <div className="flex justify-between w-full items-start">
                <span className="min-w-[50%]">
                  {/* Hiển thị giá trị mới nhất (ngày đầu tiên trong mảng) */}
                  <span className="font-bold text-2xl">
                    {item.value[0]?.value ?? 0}
                  </span>

                  <Badge className="ml-2 text-xs" variant="danger-soft">
                    <ChevronDown className="w-3 h-3" />
                    {item.value[0]?.value ?? 0}%
                  </Badge>
                </span>

                <AreaChart
                  width={180}
                  height={40}
                  data={item.value}
                  className="pointer-events-none"
                >
                  <Area
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </AreaChart>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

export default function DashboardMain() {
  return (
    <div className="max-w-screen-xl space-y-16">
      <TotalSection total={mockData.total} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Section title="Pending Events" items={mockData.pendingEvents} />
        <Section title="Pending Suppliers" items={mockData.pendingSuppliers} />
        <Section title="Reported Content" items={mockData.reportedContents} />
      </div>
    </div>
  );
}
