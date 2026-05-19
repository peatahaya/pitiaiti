import { Signal, Wifi, BatteryFull, Home, Search, Plus, User } from "lucide-react";
import { FloatingCard } from "@/components/cards/FloatingCard";

function Sparkline({ steep = false }: { steep?: boolean }) {
  const d = steep
    ? "M 0 20 Q 15 16, 30 10 T 60 2"
    : "M 0 20 Q 15 18, 30 14 T 60 6";
  return (
    <svg viewBox="0 0 60 24" className="w-full h-3" preserveAspectRatio="none">
      <path d={d} stroke="white" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const stats = [
  { label: "Today",  value: "$847", steep: false },
  { label: "Week",   value: "$5.2K", steep: false },
  { label: "Orders", value: "127",  steep: false },
  { label: "Growth", value: "+12%", steep: true  },
];

const navIcons = [Home, Search, Plus, User];

export function MobileAppCard() {
  return (
    <FloatingCard
      className="w-[270px] h-[510px] rounded-[44px] p-3"
      delay={1}
    >
      {/* Dynamic Island */}
      <div className="mx-auto h-6 w-24 rounded-full bg-black/40 mb-2" />

      {/* Status bar */}
      <div className="flex items-center justify-between px-2 mb-3">
        <span className="text-white text-[11px] font-medium">9:41</span>
        <div className="flex items-center gap-1 text-white">
          <Signal size={12} />
          <Wifi size={12} />
          <BatteryFull size={12} />
        </div>
      </div>

      {/* App header */}
      <div className="px-2 mb-4">
        <p className="text-white text-2xl font-light tracking-tight">Dashboard</p>
        <p className="text-white/50 text-xs">Welcome back</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 px-1">
        {stats.map(({ label, value, steep }) => (
          <div
            key={label}
            className="rounded-2xl bg-white/5 border border-white/10 p-3"
          >
            <p className="text-white/40 text-[10px] uppercase tracking-wider">{label}</p>
            <p className="text-white text-xl font-light mt-1">{value}</p>
            <div className="mt-2">
              <Sparkline steep={steep} />
            </div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="mt-3 px-1">
        <div className="flex items-center gap-3 py-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium truncate">Payment received</p>
            <p className="text-white/40 text-[10px]">2 min ago</p>
          </div>
          <span className="text-emerald-400 text-xs font-medium">+$48</span>
        </div>
        <button className="text-white/40 text-[10px] mt-2 hover:text-white/60 transition-colors">
          See all activity →
        </button>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto pt-5 pb-2 px-1">
        <div className="rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 p-3 flex items-center justify-around">
          {navIcons.map((Icon, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? "bg-white/15 p-2.5 rounded-full text-white"
                  : "p-2 text-white/40"
              }
            >
              <Icon size={22} />
            </div>
          ))}
        </div>
      </div>
    </FloatingCard>
  );
}
