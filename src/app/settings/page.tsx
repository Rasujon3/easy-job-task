"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { User, Lock, Bell, Palette, Globe, CreditCard } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "language", label: "Language", icon: Globe },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Settings</h2>
          <p className="text-sm text-muted-foreground">Manage your account preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Tabs */}
          <div className="lg:w-56 shrink-0">
            <div className="rounded-xl border border-border bg-card p-2 shadow-sm space-y-0.5">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-card-foreground"}`}>
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground mb-4">Profile Information</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">AU</div>
                    <div>
                      <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90">Change Avatar</button>
                      <p className="text-[10px] text-muted-foreground mt-1">JPG, PNG. Max 2MB</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", value: "Admin", placeholder: "Enter first name" },
                    { label: "Last Name", value: "User", placeholder: "Enter last name" },
                    { label: "Email", value: "admin@easyfashion.com", placeholder: "Enter email" },
                    { label: "Phone", value: "+880 1758083458", placeholder: "Enter phone" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{field.label}</label>
                      <input type="text" defaultValue={field.value} placeholder={field.placeholder} className="h-9 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Bio</label>
                  <textarea rows={3} defaultValue="Admin at Easy Fashion Ltd." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none" />
                </div>
                <div className="flex justify-end gap-3">
                  <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent transition-colors">Cancel</button>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-card-foreground">Security Settings</h3>
                <div className="space-y-4">
                  {["Current Password", "New Password", "Confirm Password"].map((label) => (
                    <div key={label}>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
                      <input type="password" placeholder={`Enter ${label.toLowerCase()}`} className="h-9 w-full max-w-md rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/20" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">Enable</button>
                </div>
                <div className="flex justify-end"><button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Update Password</button></div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-5">
                <h3 className="text-sm font-semibold text-card-foreground">Notification Preferences</h3>
                {["Email Notifications", "Push Notifications", "Order Updates", "Marketing Emails", "Security Alerts"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{item}</p>
                      <p className="text-xs text-muted-foreground">Receive {item.toLowerCase()}</p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-primary-foreground transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "appearance" && (
              <div className="space-y-5">
                <h3 className="text-sm font-semibold text-card-foreground">Appearance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[{ name: "Light", active: true }, { name: "Dark", active: false }].map((theme) => (
                    <div key={theme.name} className={`rounded-xl border-2 p-4 text-center cursor-pointer transition-colors ${theme.active ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"}`}>
                      <div className={`h-20 rounded-lg mb-3 ${theme.name === "Light" ? "bg-muted" : "bg-foreground"}`} />
                      <p className="text-sm font-medium text-card-foreground">{theme.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-5">
                <h3 className="text-sm font-semibold text-card-foreground">Billing & Plans</h3>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">Business Plan</p>
                      <p className="text-xs text-muted-foreground">$49/month · Renews Mar 15, 2026</p>
                    </div>
                    <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent">Change Plan</button>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-sm font-medium text-card-foreground mb-2">Payment Method</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">VISA</div>
                    <div>
                      <p className="text-xs font-medium text-card-foreground">•••• •••• •••• 4242</p>
                      <p className="text-[10px] text-muted-foreground">Expires 12/2027</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "language" && (
              <div className="space-y-5">
                <h3 className="text-sm font-semibold text-card-foreground">Language & Region</h3>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Language</label>
                  <select className="h-9 w-full max-w-xs rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20">
                    <option>English (US)</option>
                    <option>Bangla</option>
                    <option>Hindi</option>
                    <option>Arabic</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Timezone</label>
                  <select className="h-9 w-full max-w-xs rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20">
                    <option>UTC+06:00 (Dhaka)</option>
                    <option>UTC+00:00 (London)</option>
                    <option>UTC-05:00 (New York)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Currency</label>
                  <select className="h-9 w-full max-w-xs rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20">
                    <option>USD ($)</option>
                    <option>BDT (৳)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
                <div className="flex justify-end"><button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Save</button></div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


