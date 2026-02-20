import React, { useState } from "react";
import Tag from "../../ui/Tag";

const MOOD_TAGS_ROWS = [
  ["Procrastination", "Social issues", "Relationship issues"],
  ["Anxiety", "Procrastination", "Anxiety", "Social issues"],
];
const EMOJIS = ["😢", "😕", "😐", "🙂", "😊", "😄", "🤩"];

export default function MoodTracker() {
  const [moodValue, setMoodValue] = useState(35);
  const [reason, setReason] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const emoji = EMOJIS[Math.floor((moodValue / 100) * (EMOJIS.length - 1))];

  return (
    <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 text-base">How was Your Day, Today ?</h2>
        <span className="text-xl">💚</span>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[11px] text-gray-400 font-medium">
          <span>Sad</span><span>Well</span><span>Very Happy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg transition-all duration-200">{emoji}</span>
          <input
            type="range"
            min={0}
            max={100}
            value={moodValue}
            onChange={(e) => setMoodValue(Number(e.target.value))}
            className="flex-1"
            aria-label="Mood level"
            style={{
              background: `linear-gradient(to right, #86efac 0%, #22c55e ${moodValue}%, #e5e7eb ${moodValue}%, #e5e7eb 100%)`,
            }}
          />
        </div>
        {/* Dots */}
        <div className="flex gap-0.5 ml-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all duration-200 ${
                i / 24 <= moodValue / 100 ? "bg-green-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Reason */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-700">What was the Reason to be ?</p>
        <div className="flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 focus-within:border-green-400 transition-colors bg-white">
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ask Lovable to create a landing"
            className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />
          <button className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow hover:scale-105 active:scale-95 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-col gap-2">
        {MOOD_TAGS_ROWS.map((row, ri) => (
          <div key={ri} className="flex flex-wrap gap-2">
            {row.map((tag, ti) => (
              <Tag
                key={`${ri}-${ti}`}
                label={tag}
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
