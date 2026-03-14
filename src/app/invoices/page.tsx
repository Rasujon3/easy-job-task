"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Download, Eye, Plus, FileText } from "lucide-react";
import { useState } from "react";

interface Invoice {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue" | "Draft";
  date: string;
  dueDate: string;
}

const invoices: Invoice[] = [
  { id: "INV-001", customer: "Kristin Watson", email: "kristin@example.com", amount: "$1,250.00", status: "Paid", date: "Mar 01, 2026", dueDate: "Mar 15, 2026" },
  { id: "INV-002", customer: "Jacob Jones", email: "jacob@example.com", amount: "$2,890.00", status: "Pending", date: "Mar 02, 2026", dueDate: "Mar 16, 2026" },
  { id: "INV-003", customer: "Esther Howard", email: "esther@example.com", amount: "$650.00", status: "Overdue", date: "Feb 15, 2026", dueDate: "Mar 01, 2026" },
  { id: "INV-004", customer: "Jenny Wilson", email: "jenny@example.com", amount: "$3,400.00", status: "Paid", date: "Mar 03, 2026", dueDate: "Mar 17, 2026" },
  { id: "INV-005", customer: "Cameron Williamson", email: "cameron@example.com", amount: "$780.00", status: "Draft", date: "Mar 05, 2026", dueDate: "Mar 19, 2026" },
  { id: "INV-006", customer: "Brooklyn Simmons", email: "brooklyn@example.com", amount: "$1,920.00", status: "Pending", date: "Mar 04, 2026", dueDate: "Mar 18, 2026" },
  { id: "INV-007", customer: "Leslie Alexander", email: "leslie@example.com", amount: "$4,500.00", status: "Paid", date: "Feb 28, 2026", dueDate: "Mar 14, 2026" },
  { id: "INV-008", customer: "Guy Hawkins", email: "guy@example.com", amount: "$560.00", status: "Overdue", date: "Feb 10, 2026", dueDate: "Feb 24, 2026" },
];

const statusStyles: Record<Invoice["status"], string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Overdue: "bg-destructive/10 text-destructive",
  Draft: "bg-muted text-muted-foreground",
};

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const filtered = invoices.filter((inv) => inv.customer.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase()));

  const totalPaid = invoices.filter((i) => i.status === "Paid").length;
  const totalPending = invoices.filter((i) => i.status === "Pending").length;
  const totalOverdue = invoices.filter((i) => i.status === "Overdue").length;

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Invoices</h2>
            <p className="text-sm text-muted-foreground">Manage billing and invoices</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> Create Invoice
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Paid", count: totalPaid, color: "text-success", bg: "bg-success/10", icon: "✓" },
            { label: "Pending", count: totalPending, color: "text-warning", bg: "bg-warning/10", icon: "⏳" },
            { label: "Overdue", count: totalOverdue, color: "text-destructive", bg: "bg-destructive/10", icon: "!" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-sm flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg} text-lg`}>{s.icon}</div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{s.count}</p>
                <p className={`text-xs font-medium ${s.color}`}>{s.label} Invoices</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search invoices..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Invoice</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Date</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Due Date</th>
                  <th className="px-5 py-3 text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((inv) => (
                  <tr key={inv.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3"><div className="flex items-center gap-2"><FileText className="h-4 w-4 text-muted-foreground" /><span className="text-xs font-medium text-card-foreground">{inv.id}</span></div></td>
                    <td className="px-5 py-3"><div><p className="text-xs font-medium text-card-foreground">{inv.customer}</p><p className="text-[10px] text-muted-foreground">{inv.email}</p></div></td>
                    <td className="px-5 py-3 text-xs font-semibold text-card-foreground">{inv.amount}</td>
                    <td className="px-5 py-3"><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusStyles[inv.status]}`}>{inv.status}</span></td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden md:table-cell">{inv.date}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground hidden lg:table-cell">{inv.dueDate}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"><Eye className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"><Download className="h-3.5 w-3.5 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


