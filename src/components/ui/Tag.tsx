import React from "react";

interface TagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Tag({ label, selected = false, onClick }: TagProps) {
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
