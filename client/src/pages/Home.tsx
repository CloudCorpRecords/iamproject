import { useState } from "react";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import TradingBot from "@/components/TradingBot";
import TokenUtility from "@/components/TokenUtility";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import IframeChatbox from "@/components/IframeChatbox";

interface Agent {
  id: number;
  name: string;
  chatUrl: string;
  avatar: string;
}

export default function Home() {
  const [currentAgent, setCurrentAgent] = useState<Agent | null>(null);

  const handleChatWithAgent = (agent: Agent) => {
    setCurrentAgent(agent);
  };

  const handleCloseChat = () => {
    setCurrentAgent(null);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRain />
      <Hero />
      <main className="container mx-auto px-4 space-y-24 py-16">
        <Agents onChatWithAgent={handleChatWithAgent} />
        <TradingBot />
        <TokenUtility />
        <Newsletter />
      </main>
      <Footer />
      <IframeChatbox 
        currentAgent={currentAgent}
        onClose={handleCloseChat}
      />
    </div>
  );
}
