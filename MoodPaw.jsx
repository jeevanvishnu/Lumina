import { useState } from "react";

// ─── UI: Tag ──────────────────────────────────────────────────────────────────
function Tag({ label, selected = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
        selected
          ? "bg-green-500 border-green-500 text-white shadow scale-105"
          : "bg-white border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header({ onToolkitToggle }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-green-100">
      <div className="w-full px-5 h-14 flex items-center justify-between">
        <button className="p-2 rounded-xl hover:bg-green-100 transition-colors" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
          </svg>
        </button>
        {/* Mobile: toggle button */}
        <button
          onClick={onToolkitToggle}
          className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-200 bg-white/80 hover:bg-green-50 transition-all shadow-sm text-sm font-medium text-gray-700"
        >
          <span className="text-green-500">💚</span>
          Comfort Toolkit
        </button>
        {/* Desktop: static badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-200 bg-white/80 text-sm font-medium text-gray-700">
          <span className="text-green-500">💚</span>
          Comfort Toolkit
        </div>
      </div>
    </header>
  );
}

// ─── Pet Mascot ───────────────────────────────────────────────────────────────
function PetMascot() {
  return (
    <div className="relative flex flex-col items-center pt-4 pb-2">
      <div
        className="absolute top-0 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-md text-xs text-gray-500 font-medium"
        style={{ transform: "rotate(-4deg)", animation: "float 3s ease-in-out infinite" }}
      >
        <span className="block text-center">Tamed. ll Pet</span>
        <span className="block text-center text-green-500">Coming Soon 🌿</span>
      </div>
      <div
        className="text-8xl leading-none select-none drop-shadow-lg"
        style={{ animation: "petBounce 3s ease-in-out infinite" }}
        role="img" aria-label="Cute cat mascot"
      >
        🐱
      </div>
      <style>{`
        @keyframes float {
          0%,100% { transform: rotate(-4deg) translateY(0); }
          50%      { transform: rotate(-4deg) translateY(-6px); }
        }
        @keyframes petBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        input[type=range] {
          -webkit-appearance: none;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid #22c55e;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: transform 0.15s;
        }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.2); }
      `}</style>
    </div>
  );
}

// ─── Chat Input ───────────────────────────────────────────────────────────────
function ChatInput() {
  const [value, setValue] = useState("");
  const handleSend = () => setValue("");

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-4 flex flex-col gap-3">
      <textarea
        rows={2} value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
        placeholder="Ask Lovable to create a landing page for my a..."
        className="w-full resize-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none leading-relaxed"
      />
      <div className="flex items-center justify-between">
        <button className="text-xs font-medium text-white bg-gradient-to-r from-green-400 to-emerald-500 rounded-full px-4 py-1.5 hover:opacity-90 transition-opacity shadow-sm">
          Understand My Emotion
        </button>
        <div className="flex items-center gap-2">
          <button aria-label="Voice" className="p-2 rounded-full hover:bg-green-50 transition-colors text-gray-400 hover:text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <button onClick={handleSend} aria-label="Send"
            className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Mood Tracker ─────────────────────────────────────────────────────────────
const MOOD_TAGS_ROWS = [
  ["Procrastination", "Social issues", "Relationship issues"],
  ["Anxiety", "Procrastination", "Anxiety", "Social issues"],
];
const EMOJIS = ["😢", "😕", "😐", "🙂", "😊", "😄", "🤩"];

function MoodTracker() {
  const [moodValue, setMoodValue] = useState(35);
  const [reason, setReason] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (key) =>
    setSelectedTags((prev) => prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]);

  const emoji = EMOJIS[Math.floor((moodValue / 100) * (EMOJIS.length - 1))];

  return (
    <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 text-base">How was Your Day, Today ?</h2>
        <span className="text-xl">💚</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[11px] text-gray-400 font-medium">
          <span>Sad</span><span>Well</span><span>Very Happy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg transition-all duration-200">{emoji}</span>
          <input type="range" min={0} max={100} value={moodValue}
            onChange={(e) => setMoodValue(Number(e.target.value))}
            className="flex-1" aria-label="Mood level"
            style={{ background: `linear-gradient(to right, #86efac 0%, #22c55e ${moodValue}%, #e5e7eb ${moodValue}%, #e5e7eb 100%)` }}
          />
        </div>
        <div className="flex gap-0.5 ml-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-all duration-200 ${i / 24 <= moodValue / 100 ? "bg-green-400" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-700">What was the Reason to be ?</p>
        <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 focus-within:border-green-400 transition-colors bg-white">
          <input type="text" value={reason} onChange={(e) => setReason(e.target.value)}
            placeholder="Ask Lovable to create a landing"
            className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />
          <button className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow hover:scale-105 active:scale-95 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {MOOD_TAGS_ROWS.map((row, ri) => (
          <div key={ri} className="flex flex-wrap gap-2">
            {row.map((tag, ti) => (
              <Tag key={`${ri}-${ti}`} label={tag}
                selected={selectedTags.includes(`${ri}-${ti}`)}
                onClick={() => toggleTag(`${ri}-${ti}`)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Shared Tool Grid ─────────────────────────────────────────────────────────
const TOOLS = [
  { icon: "🌬️", label: "Breathing",    bg: "#eff6ff" },
  { icon: "🎵", label: "Calm Music",   bg: "#faf5ff" },
  { icon: "📖", label: "Journal",      bg: "#fefce8" },
  { icon: "🏃", label: "Movement",     bg: "#fff7ed" },
  { icon: "🌙", label: "Sleep Aid",    bg: "#eef2ff" },
  { icon: "😊", label: "Affirmations", bg: "#f0fdf4" },
];

function ToolkitGrid({ cols = 3 }) {
  return (
    <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {TOOLS.map(({ icon, label, bg }) => (
        <button key={label} style={{ backgroundColor: bg }}
          className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-150">
          <span className="text-2xl">{icon}</span>
          <span className="text-xs font-medium text-gray-700 text-center leading-tight">{label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Desktop Sidebar ──────────────────────────────────────────────────────────
function ToolkitSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 shrink-0 bg-white/75 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-6 gap-5 self-start sticky top-20">
      <div className="flex items-center gap-2 pb-1 border-b border-green-100">
        <span className="text-lg">💚</span>
        <h2 className="font-bold text-gray-800">Comfort Toolkit</h2>
      </div>
      <ToolkitGrid cols={3} />
      <p className="text-xs text-center text-gray-400">These tools are here to support you 💚</p>
    </aside>
  );
}

// ─── Mobile Bottom Sheet ──────────────────────────────────────────────────────
function MobileSheet({ open, onClose }) {
  return (
    <>
      <div onClick={onClose}
        className="md:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      />
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl"
        style={{ transform: open ? "translateY(0)" : "translateY(100%)", transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1)" }}
        role="dialog" aria-modal="true" aria-label="Comfort Toolkit"
      >
        <div className="p-6">
          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-800 text-lg">Comfort Toolkit</h2>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">✕</button>
          </div>
          <ToolkitGrid cols={3} />
          <p className="mt-5 text-xs text-center text-gray-400">These tools are here to support you 💚</p>
        </div>
      </div>
    </>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function MoodPaw() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 40%, #bbf7d0 100%)" }}>

      <Header onToolkitToggle={() => setSheetOpen(true)} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6 pb-24">
        {/* Two-column on desktop, single on mobile */}
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* Left: main content — left-aligned, not centered */}
          <div className="w-full md:flex-1 flex flex-col gap-5 min-w-0">
            <PetMascot />
            <ChatInput />
            <MoodTracker />
          </div>

          {/* Right: persistent sidebar on desktop */}
          <ToolkitSidebar />

        </div>
      </div>

      {/* Mobile only sheet */}
      <MobileSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </div>
  );
}
