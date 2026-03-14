"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Store,
  Tag,
  FileText,
  Bell,
  Calendar,
  UserCircle,
  LogOut,
} from "lucide-react";

const mainNavItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Orders", path: "/orders", icon: ShoppingCart },
  { title: "Products", path: "/products", icon: Package },
  { title: "Categories", path: "/categories", icon: Tag },
  { title: "Customers", path: "/customers", icon: Users },
  { title: "Analytics", path: "/analytics", icon: BarChart3 },
  { title: "Messages", path: "/messages", icon: MessageSquare, badge: 5 },
  { title: "Calendar", path: "/calendar", icon: Calendar },
  { title: "Invoices", path: "/invoices", icon: FileText },
  { title: "Notifications", path: "/notifications", icon: Bell },
];

const bottomNavItems = [
  { title: "Settings", path: "/settings", icon: Settings },
  { title: "Help Center", path: "/help", icon: HelpCircle },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen bg-sidebar transition-all duration-300 flex flex-col ${
        collapsed ? "w-[72px]" : "w-[250px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Store className="h-5 w-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-bold text-sidebar-primary-foreground tracking-wide">
              EASY
            </span>
            <span className="text-[10px] text-sidebar-foreground">
              Easy Fashion Ltd.
            </span>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group relative ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span>{item.title}</span>}
              {item.badge && !collapsed && (
                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground px-1.5">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive text-[9px] font-semibold text-destructive-foreground px-1">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border px-3 py-3 space-y-1">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="border-t border-sidebar-border px-3 py-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
            <UserCircle className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-sidebar-primary-foreground truncate">
                Admin User
              </p>
              <p className="text-[10px] text-sidebar-foreground truncate">
                admin@easyfashion.com
              </p>
            </div>
          )}
          {!collapsed && (
            <button className="text-sidebar-foreground hover:text-destructive transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full bg-card border border-border shadow-sm hover:bg-accent transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="h-3.5 w-3.5 text-foreground" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5 text-foreground" />
        )}
      </button>
    </aside>
  );
}
