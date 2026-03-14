"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const customers = [
  { name: "Kristin Watson", location: "India", avatar: "KW", followed: true },
  { name: "Jacob Jones", location: "Saudi Arabia", avatar: "JJ", followed: true },
  { name: "Esther Howard", location: "USA", avatar: "EH", followed: false },
  { name: "Jenny Wilson", location: "UK", avatar: "JW", followed: true },
  { name: "Cameron Williamson", location: "Canada", avatar: "CW", followed: false },
];

const avatarColors = [
  "bg-primary/15 text-primary",
  "bg-success/15 text-success",
  "bg-warning/15 text-warning",
  "bg-purple/15 text-purple",
  "bg-orange/15 text-orange",
];

export function CustomersList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Recent Customers</h3>
          <p className="text-xs text-muted-foreground mt-0.5">New registrations</p>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">View All</button>
      </div>
      <div className="space-y-3">
        {customers.map((customer, i) => (
          <div
            key={customer.name}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/40 transition-colors"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${avatarColors[i % avatarColors.length]}`}
            >
              {customer.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-card-foreground">{customer.name}</p>
              <div className="flex items-center gap-1">
                <MapPin className="h-2.5 w-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{customer.location}</span>
              </div>
            </div>
            <button
              className={`rounded-full px-3 py-1 text-[10px] font-semibold transition-colors ${
                customer.followed
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:bg-accent"
              }`}
            >
              {customer.followed ? "Followed" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
