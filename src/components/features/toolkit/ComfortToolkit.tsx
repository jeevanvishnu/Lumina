import React from "react";

interface ComfortToolkitProps {
  open: boolean;
  onClose: () => void;
}

const TOOLS = [
  { icon: "🌬️", label: "Breathing" },
  { icon: "🎵", label: "Calm Music" },
  { icon: "📖", label: "Journal" },
  { icon: "🏃", label: "Movement" },
  { icon: "🌙", label: "Sleep Aid" },
  { icon: "😊", label: "Affirmations" },
];

export default function ComfortToolkit({ open, onClose }: ComfortToolkitProps) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl"
        style={{
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Comfort Toolkit"
      >
        <div className="p-6">
          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800 text-lg">Comfort Toolkit</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {TOOLS.map(({ icon, label }) => (
              <button
                key={label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 hover:bg-green-100 hover:scale-105 active:scale-95 transition-all duration-150"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-6 text-xs text-center text-gray-400">These tools are here to support you 💚</p>
        </div>
      </div>
    </>
  );
}
