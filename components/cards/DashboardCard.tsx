import { FloatingCard } from "@/components/cards/FloatingCard";

export function DashboardCard() {
  return (
    <FloatingCard className="w-[360px] h-[240px]">
        <div className="p-6 flex flex-col h-full">

          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="text-white/90 text-sm font-medium">
              SaaS dashboard
            </span>
            <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full">
              Live
            </span>
          </div>

          {/* KPI row */}
          <div className="flex gap-6 mt-5">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-wider">Revenue</p>
              <p className="text-white text-2xl font-light">$3.58K</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-wider">Users</p>
              <p className="text-white text-2xl font-light">13,430</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-wider">Sessions</p>
              <p className="text-white text-2xl font-light">11,918</p>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-4 flex-1">
            <svg
              viewBox="0 0 380 100"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d="M 0 70 Q 50 60, 100 50 T 200 40 T 300 25 T 380 15 L 380 100 L 0 100 Z"
                fill="url(#chart-gradient)"
              />
              {/* Line */}
              <path
                d="M 0 70 Q 50 60, 100 50 T 200 40 T 300 25 T 380 15"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

        </div>
    </FloatingCard>
  );
}
