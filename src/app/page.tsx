"use client";

import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
} from "lucide-react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { SalesDonutChart } from "@/components/dashboard/SalesDonutChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { TopProductsList } from "@/components/dashboard/TopProductsList";
import { TrafficBarChart } from "@/components/dashboard/TrafficBarChart";
import { CustomersList } from "@/components/dashboard/CustomersList";

const stats = [
  {
    title: "Total Revenue",
    value: "$54,230",
    change: "+14.5%",
    changeType: "up" as const,
    icon: DollarSign,
    iconColorClass: "text-primary",
    iconBgClass: "bg-primary/10",
  },
  {
    title: "Total Orders",
    value: "2,456",
    change: "+8.2%",
    changeType: "up" as const,
    icon: ShoppingBag,
    iconColorClass: "text-success",
    iconBgClass: "bg-success/10",
  },
  {
    title: "New Customers",
    value: "1,180",
    change: "+12.1%",
    changeType: "up" as const,
    icon: Users,
    iconColorClass: "text-warning",
    iconBgClass: "bg-warning/10",
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: "-2.4%",
    changeType: "down" as const,
    icon: TrendingUp,
    iconColorClass: "text-purple",
    iconBgClass: "bg-purple/10",
  },
];

export default function HomePage() {
  return (
    <DashboardLayout>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} delay={i * 0.08} />
        ))}
      </div>

      {/* Revenue Chart + Donut Chart */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <SalesDonutChart />
      </div>

      {/* Orders Table */}
      <div className="mb-6">
        <RecentOrdersTable />
      </div>

      {/* Bottom Row: Traffic, Products, Customers */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrafficBarChart />
        <TopProductsList />
        <CustomersList />
      </div>
    </DashboardLayout>
  );
}
