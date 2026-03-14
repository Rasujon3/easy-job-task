"use client";

import { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Plus, MapPin, Mail, Phone, Eye, MoreHorizontal } from "lucide-react";

interface Customer {
  name: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  spent: string;
  avatar: string;
  status: "Active" | "Inactive";
  joined: string;
}

const customers: Customer[] = [
  { name: "Kristin Watson", email: "kristin@example.com", phone: "+1 234 567 890", location: "New Delhi, India", orders: 24, spent: "$3,450", avatar: "KW", status: "Active", joined: "Jan 2025" },
  { name: "Jacob Jones", email: "jacob@example.com", phone: "+966 50 123 456", location: "Riyadh, Saudi Arabia", orders: 18, spent: "$2,890", avatar: "JJ", status: "Active", joined: "Feb 2025" },
  { name: "Esther Howard", email: "esther@example.com", phone: "+1 555 234 567", location: "New York, USA", orders: 32, spent: "$5,120", avatar: "EH", status: "Active", joined: "Dec 2024" },
  { name: "Jenny Wilson", email: "jenny@example.com", phone: "+44 20 7946 0958", location: "London, UK", orders: 15, spent: "$1,980", avatar: "JW", status: "Inactive", joined: "Mar 2025" },
  { name: "Cameron Williamson", email: "cameron@example.com", phone: "+1 416 555 0123", location: "Toronto, Canada", orders: 9, spent: "$1,240", avatar: "CW", status: "Active", joined: "Jan 2025" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com", phone: "+61 2 1234 5678", location: "Sydney, Australia", orders: 21, spent: "$4,230", avatar: "BS", status: "Active", joined: "Nov 2024" },
  { name: "Leslie Alexander", email: "leslie@example.com", phone: "+49 30 12345678", location: "Berlin, Germany", orders: 7, spent: "$890", avatar: "LA", status: "Inactive", joined: "Feb 2025" },
  { name: "Guy Hawkins", email: "guy@example.com", phone: "+33 1 23 45 67 89", location: "Paris, France", orders: 28, spent: "$3,760", avatar: "GH", status: "Active", joined: "Oct 2024" },
];

const avatarColors = [
  "bg-primary/15 text-primary",
  "bg-success/15 text-success",
  "bg-warning/15 text-warning",
  "bg-purple/15 text-purple",
  "bg-orange/15 text-orange",
  "bg-teal/15 text-teal",
  "bg-info/15 text-info",
  "bg-primary/15 text-primary",
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const filtered = customers.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Customers</h2>
            <p className="text-sm text-muted-foreground">Manage your customer base</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> Add Customer
          </button>
        </div>

        <div className="relative max-w-sm mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-card pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((customer, i) => (
            <motion.div key={customer.email} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${avatarColors[i % avatarColors.length]}`}>
                  {customer.avatar}
                </div>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold ${customer.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                  {customer.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{customer.name}</h3>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Mail className="h-3 w-3" /> {customer.email}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Phone className="h-3 w-3" /> {customer.phone}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {customer.location}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <div className="text-center">
                  <p className="text-xs font-bold text-card-foreground">{customer.orders}</p>
                  <p className="text-[10px] text-muted-foreground">Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-card-foreground">{customer.spent}</p>
                  <p className="text-[10px] text-muted-foreground">Spent</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-card-foreground">{customer.joined}</p>
                  <p className="text-[10px] text-muted-foreground">Joined</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


