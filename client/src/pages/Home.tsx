import { useState } from "react";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import TradingBot from "@/components/TradingBot";
import TokenUtility from "@/components/TokenUtility";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import IframeChatbox from "@/components/IframeChatbox";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  chatUrl: string;
  avatar: string;
}

export default function Home() {
  const [activeChats, setActiveChats] = useState<Agent[]>([]);
  const [showIAMAIChat, setShowIAMAIChat] = useState(false);

  const handleChatWithAgent = (agent: Agent) => {
    if (!activeChats.find(chat => chat.id === agent.id)) {
      setActiveChats(prev => [...prev, agent]);
    }
  };

  const handleCloseChat = (agentId: number) => {
    setActiveChats(prev => prev.filter(agent => agent.id !== agentId));
  };

  const handleToggleIAMAIChat = () => {
    setShowIAMAIChat(prev => !prev);
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
      <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse items-end space-y-reverse space-y-4">
        {showIAMAIChat && (
          <IframeChatbox
            key="iamai"
            isIframe={true}
            iframeUrl="https://iamai.wtf"
            onClose={() => setShowIAMAIChat(false)}
          />
        )}
        {activeChats.map((agent, index) => (
          <IframeChatbox
            key={agent.id}
            currentAgent={agent}
            onClose={() => handleCloseChat(agent.id)}
            position={index}
          />
        ))}
      </div>
      <Button
        onClick={handleToggleIAMAIChat}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        IAMAI Chat
      </Button>
    </div>
  );
}
