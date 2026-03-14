"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Bell, ShoppingCart, Users, Package, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "order" | "customer" | "product" | "alert" | "success";
  read: boolean;
}

const notifications: Notification[] = [
  { id: 1, title: "New Order Received", description: "Order #ORD-7901 from Kristin Watson — $250.00", time: "2 min ago", type: "order", read: false },
  { id: 2, title: "New Customer Registered", description: "Leslie Alexander just created an account", time: "15 min ago", type: "customer", read: false },
  { id: 3, title: "Low Stock Alert", description: "Sport Running Shoes is now out of stock", time: "1 hour ago", type: "alert", read: false },
  { id: 4, title: "Order Delivered", description: "Order #ORD-7891 was successfully delivered", time: "2 hours ago", type: "success", read: true },
  { id: 5, title: "Payment Received", description: "Payment of $3,400.00 from Jenny Wilson", time: "3 hours ago", type: "success", read: true },
  { id: 6, title: "New Product Review", description: "5-star review on Summer Collection Dress", time: "5 hours ago", type: "product", read: true },
  { id: 7, title: "Order Cancelled", description: "Order #ORD-7895 was cancelled by customer", time: "6 hours ago", type: "alert", read: true },
  { id: 8, title: "New Bulk Order", description: "Order #ORD-7902 — 50 items from corporate client", time: "1 day ago", type: "order", read: true },
];

const iconMap = {
  order: { icon: ShoppingCart, color: "text-primary", bg: "bg-primary/10" },
  customer: { icon: Users, color: "text-success", bg: "bg-success/10" },
  product: { icon: Package, color: "text-purple", bg: "bg-purple/10" },
  alert: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
  success: { icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Notifications</h2>
            <p className="text-sm text-muted-foreground">{unreadCount} unread notifications</p>
          </div>
          <button className="text-xs font-medium text-primary hover:underline">Mark all as read</button>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm divide-y divide-border">
          {notifications.map((notif, i) => {
            const { icon: Icon, color, bg } = iconMap[notif.type];
            return (
              <motion.div key={notif.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className={`flex items-start gap-4 px-5 py-4 hover:bg-muted/30 transition-colors ${!notif.read ? "bg-primary/[0.02]" : ""}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <p className={`text-sm ${!notif.read ? "font-semibold" : "font-medium"} text-card-foreground`}>{notif.title}</p>
                    {!notif.read && <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{notif.description}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-2.5 w-2.5 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">{notif.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


