"use client";

import { motion } from "framer-motion";
import { Eye, MoreHorizontal } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "Delivered" | "Pending" | "Processing" | "Cancelled";
  date: string;
}

const orders: Order[] = [
  { id: "#ORD-7891", customer: "Kristin Watson", product: "Summer Dress", amount: "$125.00", status: "Delivered", date: "Mar 05, 2026" },
  { id: "#ORD-7892", customer: "Jacob Jones", product: "Leather Jacket", amount: "$289.00", status: "Processing", date: "Mar 05, 2026" },
  { id: "#ORD-7893", customer: "Esther Howard", product: "Running Shoes", amount: "$165.00", status: "Pending", date: "Mar 04, 2026" },
  { id: "#ORD-7894", customer: "Jenny Wilson", product: "Silk Scarf", amount: "$78.00", status: "Delivered", date: "Mar 04, 2026" },
  { id: "#ORD-7895", customer: "Cameron Williamson", product: "Denim Jeans", amount: "$95.00", status: "Cancelled", date: "Mar 03, 2026" },
  { id: "#ORD-7896", customer: "Brooklyn Simmons", product: "Handbag", amount: "$340.00", status: "Processing", date: "Mar 03, 2026" },
];

const statusStyles: Record<Order["status"], string> = {
  Delivered: "bg-success/10 text-success",
  Processing: "bg-info/10 text-info",
  Pending: "bg-warning/10 text-warning",
  Cancelled: "bg-destructive/10 text-destructive",
};

export function RecentOrdersTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="rounded-xl border border-border bg-card shadow-sm"
    >
      <div className="flex items-center justify-between p-5 pb-3">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Recent Orders</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Latest customer orders</p>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-border">
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Order ID</th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Product</th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Date</th>
              <th className="px-5 py-3 text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-5 py-3 text-xs font-medium text-card-foreground">{order.id}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-[10px] font-semibold text-primary">
                        {order.customer.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-card-foreground">{order.customer}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{order.product}</td>
                <td className="px-5 py-3 text-xs font-semibold text-card-foreground">{order.amount}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs text-muted-foreground hidden lg:table-cell">{order.date}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-colors">
                      <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                    <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-colors">
                      <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
