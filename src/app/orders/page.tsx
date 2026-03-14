"use client";

import { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  quantity: number;
  amount: string;
  status: "Delivered" | "Pending" | "Processing" | "Cancelled" | "Shipped";
  date: string;
  payment: "Credit Card" | "PayPal" | "Bank Transfer" | "COD";
}

const allOrders: Order[] = [
  { id: "#ORD-7891", customer: "Kristin Watson", email: "kristin@example.com", product: "Summer Dress", quantity: 2, amount: "$250.00", status: "Delivered", date: "Mar 05, 2026", payment: "Credit Card" },
  { id: "#ORD-7892", customer: "Jacob Jones", email: "jacob@example.com", product: "Leather Jacket", quantity: 1, amount: "$289.00", status: "Processing", date: "Mar 05, 2026", payment: "PayPal" },
  { id: "#ORD-7893", customer: "Esther Howard", email: "esther@example.com", product: "Running Shoes", quantity: 1, amount: "$165.00", status: "Pending", date: "Mar 04, 2026", payment: "Credit Card" },
  { id: "#ORD-7894", customer: "Jenny Wilson", email: "jenny@example.com", product: "Silk Scarf", quantity: 3, amount: "$234.00", status: "Delivered", date: "Mar 04, 2026", payment: "Bank Transfer" },
  { id: "#ORD-7895", customer: "Cameron Williamson", email: "cameron@example.com", product: "Denim Jeans", quantity: 2, amount: "$190.00", status: "Cancelled", date: "Mar 03, 2026", payment: "COD" },
  { id: "#ORD-7896", customer: "Brooklyn Simmons", email: "brooklyn@example.com", product: "Handbag", quantity: 1, amount: "$340.00", status: "Shipped", date: "Mar 03, 2026", payment: "Credit Card" },
  { id: "#ORD-7897", customer: "Leslie Alexander", email: "leslie@example.com", product: "Wool Coat", quantity: 1, amount: "$420.00", status: "Delivered", date: "Mar 02, 2026", payment: "PayPal" },
  { id: "#ORD-7898", customer: "Guy Hawkins", email: "guy@example.com", product: "Sneakers", quantity: 2, amount: "$178.00", status: "Processing", date: "Mar 02, 2026", payment: "Credit Card" },
  { id: "#ORD-7899", customer: "Robert Fox", email: "robert@example.com", product: "Polo Shirt", quantity: 4, amount: "$196.00", status: "Pending", date: "Mar 01, 2026", payment: "Bank Transfer" },
  { id: "#ORD-7900", customer: "Wade Warren", email: "wade@example.com", product: "Sunglasses", quantity: 1, amount: "$85.00", status: "Delivered", date: "Mar 01, 2026", payment: "COD" },
];

const statusStyles: Record<Order["status"], string> = {
  Delivered: "bg-success/10 text-success",
  Processing: "bg-info/10 text-info",
  Pending: "bg-warning/10 text-warning",
  Cancelled: "bg-destructive/10 text-destructive",
  Shipped: "bg-purple/10 text-purple",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const filtered = allOrders.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Orders</h2>
            <p className="text-sm text-muted-foreground">Manage and track all customer orders</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" />
            New Order
          </button>
        </div>

        {/* Filters */}
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 border-b border-border">
            <div className="relative flex-1 w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="flex items-center gap-2">
              {["All", "Delivered", "Processing", "Pending", "Shipped", "Cancelled"].map((s) => (
                <button
                  key={s}
                  onClick={() => { setStatusFilter(s); setCurrentPage(1); }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${statusFilter === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent transition-colors">
                <Filter className="h-3.5 w-3.5" /> Filter
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent transition-colors">
                <Download className="h-3.5 w-3.5" /> Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Order ID</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Product</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Qty</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Payment</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Date</th>
                  <th className="px-5 py-3 text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 text-xs font-medium text-card-foreground">{order.id}</td>
                    <td className="px-5 py-3">
                      <div>
                        <p className="text-xs font-medium text-card-foreground">{order.customer}</p>
                        <p className="text-[10px] text-muted-foreground">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{order.product}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden lg:table-cell">{order.quantity}</td>
                    <td className="px-5 py-3 text-xs font-semibold text-card-foreground">{order.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusStyles[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden lg:table-cell">{order.payment}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{order.date}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-colors"><Eye className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-colors"><Edit className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-destructive/10 transition-colors"><Trash2 className="h-3.5 w-3.5 text-destructive" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border">
            <p className="text-xs text-muted-foreground">Showing {(currentPage - 1) * perPage + 1}-{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}</p>
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-accent disabled:opacity-50 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors ${currentPage === i + 1 ? "bg-primary text-primary-foreground" : "border border-border hover:bg-accent"}`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-accent disabled:opacity-50 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


