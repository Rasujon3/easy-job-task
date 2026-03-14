"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Package } from "lucide-react";

const categories = [
  { name: "Clothing", products: 1245, revenue: "$156,200", icon: "👗", color: "bg-primary/10 text-primary" },
  { name: "Shoes", products: 876, revenue: "$98,400", icon: "👟", color: "bg-success/10 text-success" },
  { name: "Bags", products: 654, revenue: "$87,100", icon: "👜", color: "bg-warning/10 text-warning" },
  { name: "Accessories", products: 543, revenue: "$45,800", icon: "🧣", color: "bg-purple/10 text-purple" },
  { name: "Jewelry", products: 321, revenue: "$67,500", icon: "💎", color: "bg-orange/10 text-orange" },
  { name: "Watches", products: 234, revenue: "$89,200", icon: "⌚", color: "bg-teal/10 text-teal" },
  { name: "Sportswear", products: 456, revenue: "$52,300", icon: "🏃", color: "bg-info/10 text-info" },
  { name: "Formal Wear", products: 189, revenue: "$78,900", icon: "👔", color: "bg-primary/10 text-primary" },
];

export default function CategoriesPage() {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Categories</h2>
            <p className="text-sm text-muted-foreground">Manage product categories</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${cat.color.split(" ")[0]}`}>
                  {cat.icon}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"><Edit className="h-3.5 w-3.5 text-muted-foreground" /></button>
                  <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5 text-destructive" /></button>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-card-foreground mb-1">{cat.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Package className="h-3 w-3" />
                <span>{cat.products} products</span>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Revenue</p>
                <p className="text-lg font-bold text-card-foreground">{cat.revenue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


