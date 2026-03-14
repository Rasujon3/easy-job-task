"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColorClass,
  iconBgClass,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="text-2xl font-bold text-card-foreground">{value}</p>
          <div className="flex items-center gap-1.5">
            {changeType === "up" ? (
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-destructive" />
            )}
            <span
              className={`text-xs font-semibold ${
                changeType === "up" ? "text-success" : "text-destructive"
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBgClass}`}>
          <Icon className={`h-5 w-5 ${iconColorClass}`} />
        </div>
      </div>
    </motion.div>
  );
}
