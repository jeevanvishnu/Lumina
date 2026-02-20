import { useState } from "react";

export default function ChatInput() {
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