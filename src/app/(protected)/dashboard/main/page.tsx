"use client";

import { ActionCard } from "@/components/ui/action-card";
import { useEffect, useState } from "react";

const mockData: DashboardData = {
  total: {
    submissions: 80,
    totalUser: 150,
    activePosts: 200,
    reportedContents: 30,
  },
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
};

// Reusable Section component to reduce duplication
interface SectionProps {
  title: string;
  items: Array<{ id: number; name: string; describe: string }>;
}

function Section({ title, items }: SectionProps) {
  return (
    <section className="flex flex-col w-full">
      <h3 className="text-2xl font-semibold ml-2 mb-4">{title}</h3>
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <ActionCard
              key={item.id}
              title={item.name}
              content={item.describe}
            />
          ))
        ) : (
          <p className="text-gray-500 ml-2">
            No {title.toLowerCase()} available.
          </p>
        )}
      </div>
    </section>
  );
}

// Optimized TotalSection to display total data correctly
function TotalSection({ total }: { total: TotalData }) {
  const [totalItems, setTotalItems] = useState<
    Array<{ id: string; name: string; value: number }>
  >([]);

  useEffect(() => {
    setTimeout(() =>
      setTotalItems([
        {
          id: "submissions",
          name: "Total Submissions",
          value: total.submissions,
        },
        { id: "totalUser", name: "Total Users", value: total.totalUser },
        { id: "activePosts", name: "Active Posts", value: total.activePosts },
        {
          id: "reportedContents",
          name: "Reported Contents",
          value: total.reportedContents,
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
            content={item.value.toString()}
          />
        ))}
      </div>
    </section>
  );
}

export default function DashboardMain() {
  return (
    <div className="mt-6 max-w-screen-xl space-y-16">
      <TotalSection total={mockData.total} />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <Section title="Pending Events" items={mockData.pendingEvents} />
        <Section title="Pending Suppliers" items={mockData.pendingSuppliers} />
      </div>
      <Section title="Reported Content" items={mockData.pendingSuppliers} />
    </div>
  );
}
