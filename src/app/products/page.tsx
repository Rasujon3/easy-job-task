"use client";

import { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Plus, Grid3X3, List, Star, Eye, Edit, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  rating: number;
  sales: number;
  image: string;
  status: "Active" | "Draft" | "Out of Stock";
}

const products: Product[] = [
  { id: "PRD-001", name: "Summer Collection Dress", category: "Clothing", price: "$125.00", stock: 245, rating: 4.8, sales: 1245, image: "👗", status: "Active" },
  { id: "PRD-002", name: "Classic Leather Bag", category: "Bags", price: "$289.00", stock: 120, rating: 4.9, sales: 987, image: "👜", status: "Active" },
  { id: "PRD-003", name: "Sport Running Shoes", category: "Shoes", price: "$165.00", stock: 0, rating: 4.7, sales: 876, image: "👟", status: "Out of Stock" },
  { id: "PRD-004", name: "Silk Designer Scarf", category: "Accessories", price: "$78.00", stock: 340, rating: 4.5, sales: 654, image: "🧣", status: "Active" },
  { id: "PRD-005", name: "Premium Denim Jeans", category: "Clothing", price: "$95.00", stock: 180, rating: 4.6, sales: 543, image: "👖", status: "Active" },
  { id: "PRD-006", name: "Wool Winter Coat", category: "Clothing", price: "$420.00", stock: 56, rating: 4.9, sales: 321, image: "🧥", status: "Active" },
  { id: "PRD-007", name: "Canvas Sneakers", category: "Shoes", price: "$89.00", stock: 0, rating: 4.3, sales: 445, image: "👞", status: "Draft" },
  { id: "PRD-008", name: "Designer Sunglasses", category: "Accessories", price: "$185.00", stock: 78, rating: 4.7, sales: 289, image: "🕶️", status: "Active" },
];

const statusStyles: Record<Product["status"], string> = {
  Active: "bg-success/10 text-success",
  Draft: "bg-warning/10 text-warning",
  "Out of Stock": "bg-destructive/10 text-destructive",
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Products</h2>
            <p className="text-sm text-muted-foreground">Manage your product inventory</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-card pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
          </div>
          <div className="flex items-center rounded-lg border border-border bg-card">
            <button onClick={() => setView("grid")} className={`flex h-9 w-9 items-center justify-center rounded-l-lg transition-colors ${view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`}><Grid3X3 className="h-4 w-4" /></button>
            <button onClick={() => setView("list")} className={`flex h-9 w-9 items-center justify-center rounded-r-lg transition-colors ${view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`}><List className="h-4 w-4" /></button>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-32 items-center justify-center rounded-lg bg-muted text-4xl mb-3">{product.image}</div>
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-card-foreground leading-tight">{product.name}</h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusStyles[product.status]}`}>{product.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <span className="text-xs font-medium text-card-foreground">{product.rating}</span>
                    <span className="text-[10px] text-muted-foreground">({product.sales} sales)</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm font-bold text-primary">{product.price}</span>
                    <span className="text-[10px] text-muted-foreground">{product.stock} in stock</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Product</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Stock</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Rating</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr key={product.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{product.image}</span>
                        <span className="text-xs font-medium text-card-foreground">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{product.category}</td>
                    <td className="px-5 py-3 text-xs font-semibold text-card-foreground">{product.price}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{product.stock}</td>
                    <td className="px-5 py-3"><div className="flex items-center gap-1"><Star className="h-3 w-3 fill-warning text-warning" /><span className="text-xs">{product.rating}</span></div></td>
                    <td className="px-5 py-3"><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusStyles[product.status]}`}>{product.status}</span></td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"><Eye className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"><Edit className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5 text-destructive" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};


