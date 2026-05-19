import { FloatingCard } from "@/components/cards/FloatingCard";

export function CodeSnippetCard() {
  return (
    <FloatingCard className="w-[380px] h-[200px] p-0">
      {/* macOS window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-auto mr-auto text-white/40 text-xs font-mono">auth.tsx</span>
      </div>

      {/* Code area */}
      <div className="relative bg-black/30 p-4 flex-1">
        <pre className="font-mono text-[13px] leading-relaxed text-white/80">
          <span className="text-purple-400">export async function</span>{" "}
          <span className="text-blue-400">authenticate</span>
          <span className="text-white/60">(</span>
          <span className="text-orange-300">user</span>
          <span className="text-white/60">: </span>
          <span className="text-emerald-300">User</span>
          <span className="text-white/60">) {`{`}</span>
          {"\n  "}
          <span className="text-purple-400">const</span> token{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-purple-400">await</span>{" "}
          <span className="text-blue-400">signJWT</span>
          <span className="text-white/60">(user);</span>
          {"\n  "}
          <span className="text-purple-400">return</span>{" "}
          <span className="text-white/60">{`{ token, user };`}</span>
          {"\n"}
          <span className="text-white/60">{`}`}</span>
        </pre>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </FloatingCard>
  );
}
