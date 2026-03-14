"use client";

import { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface ChatMessage {
  id: number;
  text: string;
  time: string;
  isMe: boolean;
}

const conversations: Message[] = [
  { id: 1, sender: "Kristin Watson", avatar: "KW", lastMessage: "Hey! I have a question about my order...", time: "2m ago", unread: 3, online: true },
  { id: 2, sender: "Jacob Jones", avatar: "JJ", lastMessage: "Thanks for the update!", time: "15m ago", unread: 0, online: true },
  { id: 3, sender: "Esther Howard", avatar: "EH", lastMessage: "When will my package arrive?", time: "1h ago", unread: 1, online: false },
  { id: 4, sender: "Jenny Wilson", avatar: "JW", lastMessage: "I'd like to return this item", time: "3h ago", unread: 0, online: false },
  { id: 5, sender: "Cameron Williamson", avatar: "CW", lastMessage: "Great collection! Love it", time: "5h ago", unread: 0, online: true },
  { id: 6, sender: "Brooklyn Simmons", avatar: "BS", lastMessage: "Do you have this in size M?", time: "1d ago", unread: 1, online: false },
];

const chatMessages: ChatMessage[] = [
  { id: 1, text: "Hi! I placed an order yesterday but haven't received a confirmation email yet.", time: "10:30 AM", isMe: false },
  { id: 2, text: "Hello Kristin! Let me check that for you right away.", time: "10:32 AM", isMe: true },
  { id: 3, text: "Your order #ORD-7891 was confirmed. I'm resending the email now.", time: "10:33 AM", isMe: true },
  { id: 4, text: "Oh great, thank you so much! 😊", time: "10:35 AM", isMe: false },
  { id: 5, text: "Also, do you know when it will be shipped?", time: "10:35 AM", isMe: false },
  { id: 6, text: "It should ship within 24-48 hours. You'll get a tracking number via email.", time: "10:37 AM", isMe: true },
];

const avatarColors = ["bg-primary/15 text-primary", "bg-success/15 text-success", "bg-warning/15 text-warning", "bg-purple/15 text-purple", "bg-orange/15 text-orange", "bg-teal/15 text-teal"];

export default function MessagesPage() {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = conversations.filter((c) => c.sender.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Messages</h2>
          <p className="text-sm text-muted-foreground">Chat with customers</p>
        </div>

        <div className="flex rounded-xl border border-border bg-card shadow-sm overflow-hidden" style={{ height: "calc(100vh - 220px)" }}>
          {/* Sidebar */}
          <div className="w-80 border-r border-border flex flex-col shrink-0">
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="Search messages..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filtered.map((conv, i) => (
                <button key={conv.id} onClick={() => setSelected(i)} className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-colors ${selected === i ? "bg-muted/60" : ""}`}>
                  <div className="relative">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${avatarColors[i % avatarColors.length]}`}>{conv.avatar}</div>
                    {conv.online && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-success" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-card-foreground">{conv.sender}</p>
                      <span className="text-[10px] text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground px-1">{conv.unread}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${avatarColors[selected % avatarColors.length]}`}>{conversations[selected]?.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{conversations[selected]?.sender}</p>
                  <p className="text-[10px] text-success">{conversations[selected]?.online ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent transition-colors"><Phone className="h-4 w-4 text-muted-foreground" /></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent transition-colors"><Video className="h-4 w-4 text-muted-foreground" /></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent transition-colors"><MoreVertical className="h-4 w-4 text-muted-foreground" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] rounded-xl px-4 py-2.5 ${msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted text-card-foreground"}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-3 flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent transition-colors"><Paperclip className="h-4 w-4 text-muted-foreground" /></button>
              <input type="text" placeholder="Type a message..." className="flex-1 h-9 rounded-lg border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"><Send className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};


