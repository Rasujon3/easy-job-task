"use client";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Eye, ShoppingCart, Users, DollarSign } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 12400, visitors: 8400, orders: 420 },
  { month: "Feb", revenue: 13800, visitors: 9200, orders: 480 },
  { month: "Mar", revenue: 15200, visitors: 10100, orders: 520 },
  { month: "Apr", revenue: 14100, visitors: 9800, orders: 490 },
  { month: "May", revenue: 16800, visitors: 11200, orders: 580 },
  { month: "Jun", revenue: 18200, visitors: 12400, orders: 640 },
  { month: "Jul", revenue: 17500, visitors: 11800, orders: 610 },
  { month: "Aug", revenue: 19400, visitors: 13200, orders: 700 },
  { month: "Sep", revenue: 21000, visitors: 14500, orders: 760 },
  { month: "Oct", revenue: 22800, visitors: 15200, orders: 820 },
  { month: "Nov", revenue: 20500, visitors: 14000, orders: 740 },
  { month: "Dec", revenue: 24200, visitors: 16800, orders: 890 },
];

const trafficSources = [
  { name: "Organic Search", value: 42, color: "hsl(217, 91%, 60%)" },
  { name: "Direct", value: 28, color: "hsl(142, 71%, 45%)" },
  { name: "Social Media", value: 18, color: "hsl(38, 92%, 50%)" },
  { name: "Referral", value: 12, color: "hsl(262, 83%, 58%)" },
];

const deviceData = [
  { device: "Mobile", sessions: 58 },
  { device: "Desktop", sessions: 32 },
  { device: "Tablet", sessions: 10 },
];

const kpis = [
  { title: "Total Visitors", value: "156.2K", change: "+18.2%", up: true, icon: Eye, color: "text-primary", bg: "bg-primary/10" },
  { title: "Conversion Rate", value: "3.24%", change: "+0.8%", up: true, icon: ShoppingCart, color: "text-success", bg: "bg-success/10" },
  { title: "Avg. Order Value", value: "$127.50", change: "-2.1%", up: false, icon: DollarSign, color: "text-warning", bg: "bg-warning/10" },
  { title: "Active Users", value: "8,432", change: "+12.5%", up: true, icon: Users, color: "text-purple", bg: "bg-purple/10" },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Analytics</h2>
          <p className="text-sm text-muted-foreground">Detailed performance insights</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi, i) => (
            <motion.div key={kpi.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{kpi.title}</p>
                  <p className="text-2xl font-bold text-card-foreground mt-1">{kpi.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {kpi.up ? <TrendingUp className="h-3.5 w-3.5 text-success" /> : <TrendingDown className="h-3.5 w-3.5 text-destructive" />}
                    <span className={`text-xs font-semibold ${kpi.up ? "text-success" : "text-destructive"}`}>{kpi.change}</span>
                  </div>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${kpi.bg}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Trend */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Revenue Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="analyticsRevGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214,32%,91%)", borderRadius: "8px", fontSize: "12px" }} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(217, 91%, 60%)" fill="url(#analyticsRevGrad)" strokeWidth={2.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Traffic Sources Donut */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Traffic Sources</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trafficSources} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value" strokeWidth={0}>
                    {trafficSources.map((entry, index) => (<Cell key={index} fill={entry.color} />))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214,32%,91%)", borderRadius: "8px", fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 space-y-2">
              {trafficSources.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} /><span className="text-muted-foreground">{s.name}</span></div>
                  <span className="font-medium text-card-foreground">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visitors & Orders + Device Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Visitors vs Orders</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214,32%,91%)", borderRadius: "8px", fontSize: "12px" }} />
                  <Line type="monotone" dataKey="visitors" stroke="hsl(217, 91%, 60%)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="orders" stroke="hsl(142, 71%, 45%)" strokeWidth={2} dot={false} />
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Sessions by Device</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deviceData} layout="vertical" barSize={24}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="device" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} width={60} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214,32%,91%)", borderRadius: "8px", fontSize: "12px" }} />
                  <Bar dataKey="sessions" fill="hsl(217, 91%, 60%)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


