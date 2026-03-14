"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", revenue: 4000, orders: 2400 },
  { month: "Feb", revenue: 3000, orders: 1398 },
  { month: "Mar", revenue: 5000, orders: 3800 },
  { month: "Apr", revenue: 4780, orders: 3908 },
  { month: "May", revenue: 5890, orders: 4800 },
  { month: "Jun", revenue: 6390, orders: 3800 },
  { month: "Jul", revenue: 7490, orders: 4300 },
  { month: "Aug", revenue: 6200, orders: 3600 },
  { month: "Sep", revenue: 7800, orders: 5100 },
  { month: "Oct", revenue: 8200, orders: 4800 },
  { month: "Nov", revenue: 7100, orders: 4200 },
  { month: "Dec", revenue: 9400, orders: 5800 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Revenue Overview</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Monthly revenue & orders</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-[11px] text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="text-[11px] text-muted-foreground">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(214, 32%, 91%)",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(217, 91%, 60%)"
              fill="url(#colorRevenue)"
              strokeWidth={2.5}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="hsl(142, 71%, 45%)"
              fill="url(#colorOrders)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
