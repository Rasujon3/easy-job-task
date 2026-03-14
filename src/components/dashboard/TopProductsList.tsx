"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const products = [
  { name: "Summer Collection Dress", sales: 1245, revenue: "$15,500", growth: "+12%", image: "👗" },
  { name: "Classic Leather Bag", sales: 987, revenue: "$28,400", growth: "+8%", image: "👜" },
  { name: "Sport Running Shoes", sales: 876, revenue: "$14,200", growth: "+15%", image: "👟" },
  { name: "Silk Designer Scarf", sales: 654, revenue: "$8,100", growth: "+5%", image: "🧣" },
  { name: "Premium Denim Jeans", sales: 543, revenue: "$9,800", growth: "+10%", image: "👖" },
];

export function TopProductsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Top Products</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Best selling items</p>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">View All</button>
      </div>
      <div className="space-y-3">
        {products.map((product, i) => (
          <div
            key={product.name}
            className="flex items-center gap-3 rounded-lg p-2.5 hover:bg-muted/40 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">
              {product.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-card-foreground truncate">{product.name}</p>
              <p className="text-[10px] text-muted-foreground">{product.sales} sales</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-card-foreground">{product.revenue}</p>
              <div className="flex items-center justify-end gap-0.5">
                <TrendingUp className="h-2.5 w-2.5 text-success" />
                <span className="text-[10px] font-medium text-success">{product.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
