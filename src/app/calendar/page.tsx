"use client";

import { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react";

interface Event {
  id: number;
  title: string;
  time: string;
  color: string;
  day: number;
}

const events: Event[] = [
  { id: 1, title: "Team Standup", time: "09:00 AM", color: "bg-primary", day: 3 },
  { id: 2, title: "Product Review", time: "11:00 AM", color: "bg-success", day: 5 },
  { id: 3, title: "Client Meeting", time: "02:00 PM", color: "bg-warning", day: 8 },
  { id: 4, title: "Design Sprint", time: "10:00 AM", color: "bg-purple", day: 10 },
  { id: 5, title: "Sales Review", time: "03:00 PM", color: "bg-orange", day: 12 },
  { id: 6, title: "Marketing Sync", time: "01:00 PM", color: "bg-teal", day: 15 },
  { id: 7, title: "Inventory Check", time: "04:00 PM", color: "bg-info", day: 18 },
  { id: 8, title: "Budget Meeting", time: "09:30 AM", color: "bg-primary", day: 22 },
];

const daysInMonth = 31;
const firstDayOffset = 5; // March 2026 starts on Sunday=0...Sat, let's say it starts on Saturday (index 6 → offset 6)
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [currentMonth] = useState("March 2026");

  const days = (Array.from({ length: firstDayOffset }, (): number | null => null) as (number | null)[]).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const today = 8;

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Calendar</h2>
            <p className="text-sm text-muted-foreground">Schedule and manage events</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" /> Add Event
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* Calendar Grid */}
          <div className="lg:col-span-3 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-card-foreground">{currentMonth}</h3>
              <div className="flex items-center gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"><ChevronLeft className="h-4 w-4" /></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
              {dayNames.map((d) => (
                <div key={d} className="bg-muted px-2 py-2 text-center text-[11px] font-semibold text-muted-foreground uppercase">{d}</div>
              ))}
              {days.map((day, i) => {
                const dayEvents = day ? events.filter((e) => e.day === day) : [];
                return (
                  <div key={i} className={`bg-card min-h-[80px] p-1.5 ${day === today ? "ring-2 ring-inset ring-primary" : ""} ${!day ? "bg-muted/30" : "hover:bg-muted/20"}`}>
                    {day && (
                      <>
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium ${day === today ? "bg-primary text-primary-foreground" : "text-card-foreground"}`}>{day}</span>
                        <div className="mt-0.5 space-y-0.5">
                          {dayEvents.map((e) => (
                            <div key={e.id} className={`${e.color} rounded px-1 py-0.5 text-[8px] font-medium text-primary-foreground truncate`}>{e.title}</div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-card-foreground mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {events.slice(0, 6).map((event) => (
                <div key={event.id} className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-muted/40 transition-colors">
                  <div className={`w-1 h-10 rounded-full ${event.color} shrink-0`} />
                  <div>
                    <p className="text-xs font-medium text-card-foreground">{event.title}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock className="h-2.5 w-2.5 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">{event.time} · Mar {event.day}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


