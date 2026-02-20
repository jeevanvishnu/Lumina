import { useState } from "react";
import Header from "./components/layout/Header";
import PetMascot from "./components/features/chat/PetMascot";
import ChatInput from "./components/features/chat/ChatInput";
import MoodTracker from "./components/features/mood/MoodTracker";
import ComfortToolkit from "./components/features/toolkit/ComfortToolkit";

export default function App() {
  const [toolkitOpen, setToolkitOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 40%, #bbf7d0 100%)",
      }}
    >
      <Header onToolkitToggle={() => setToolkitOpen(true)} />

      <main className="max-w-2xl mx-auto px-4 pt-4 pb-24 flex flex-col gap-5">
        <PetMascot />
        <ChatInput />
        <MoodTracker />
      </main>

      <ComfortToolkit open={toolkitOpen} onClose={() => setToolkitOpen(false)} />
    </div>
  );
}
