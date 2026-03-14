"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Clothing", value: 4500, color: "hsl(217, 91%, 60%)" },
  { name: "Shoes", value: 3200, color: "hsl(142, 71%, 45%)" },
  { name: "Accessories", value: 2100, color: "hsl(38, 92%, 50%)" },
  { name: "Bags", value: 1800, color: "hsl(262, 83%, 58%)" },
  { name: "Others", value: 900, color: "hsl(25, 95%, 53%)" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

export function SalesDonutChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-card-foreground">Sales by Category</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Product distribution</p>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(214, 32%, 91%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium text-card-foreground">
              {((item.value / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
