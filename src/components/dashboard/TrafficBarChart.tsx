"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Sat", visitors: 4000, pageViews: 2400 },
  { day: "Sun", visitors: 3000, pageViews: 1398 },
  { day: "Mon", visitors: 5000, pageViews: 3800 },
  { day: "Tue", visitors: 4780, pageViews: 3908 },
  { day: "Wed", visitors: 5890, pageViews: 4800 },
  { day: "Thu", visitors: 6390, pageViews: 3800 },
  { day: "Fri", visitors: 7490, pageViews: 4300 },
];

export function TrafficBarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Website Traffic</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Weekly visitors & page views</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-[11px] text-muted-foreground">Visitors</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal" />
            <span className="text-[11px] text-muted-foreground">Page Views</span>
          </div>
        </div>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(214, 32%, 91%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="visitors" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} barSize={18} />
            <Bar dataKey="pageViews" fill="hsl(172, 66%, 50%)" radius={[4, 4, 0, 0]} barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
