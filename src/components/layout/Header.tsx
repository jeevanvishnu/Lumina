import React from "react";

interface HeaderProps {
  onToolkitToggle: () => void;
}

export default function Header({ onToolkitToggle }: HeaderProps) {
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
