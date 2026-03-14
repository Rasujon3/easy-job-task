"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Book, MessageCircle, FileText, Video, ExternalLink, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How do I track my orders?", a: "Go to the Orders page and click on any order to view its tracking details and status history." },
  { q: "How do I add a new product?", a: "Navigate to the Products page and click 'Add Product' to fill in the product details form." },
  { q: "How do I manage customer returns?", a: "Go to Orders, find the order, and click the 'Return' action. Follow the return processing workflow." },
  { q: "How do I export reports?", a: "Visit the Analytics page and click 'Export' to download reports in CSV or PDF format." },
  { q: "How do I change my password?", a: "Go to Settings > Security and enter your current password followed by the new password." },
  { q: "How do I set up notifications?", a: "Visit Settings > Notifications to configure email, push, and in-app notification preferences." },
];

const resources = [
  { title: "Getting Started Guide", description: "Learn the basics of managing your store", icon: Book, color: "bg-primary/10 text-primary" },
  { title: "Video Tutorials", description: "Step-by-step video walkthroughs", icon: Video, color: "bg-success/10 text-success" },
  { title: "API Documentation", description: "Technical docs for developers", icon: FileText, color: "bg-purple/10 text-purple" },
  { title: "Contact Support", description: "Get help from our support team", icon: MessageCircle, color: "bg-warning/10 text-warning" },
];

export default function HelpCenterPage() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {/* Hero */}
        <div className="rounded-xl bg-primary p-8 mb-6 text-center">
          <h2 className="text-xl font-bold text-primary-foreground mb-2">How can we help you?</h2>
          <p className="text-sm text-primary-foreground/70 mb-4">Search our knowledge base or browse topics below</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search for help..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-10 w-full rounded-lg bg-card pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {resources.map((res, i) => (
            <motion.div key={res.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${res.color} mb-3`}>
                <res.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground mb-1">{res.title}</h3>
              <p className="text-xs text-muted-foreground">{res.description}</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ExternalLink className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors">
                  <span className="text-sm font-medium text-card-foreground">{faq.q}</span>
                  <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-4 pb-3">
                    <p className="text-xs text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm text-center">
          <h3 className="text-sm font-semibold text-card-foreground mb-1">Still need help?</h3>
          <p className="text-xs text-muted-foreground mb-3">Contact our support team</p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>📧 dev.easysofts@gmail.com</span>
            <span>📞 1758083458</span>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


