import React from "react";

export default function PetMascot() {
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
        role="img"
        aria-label="Cute cat mascot"
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
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
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
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid #22c55e;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: transform 0.15s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
