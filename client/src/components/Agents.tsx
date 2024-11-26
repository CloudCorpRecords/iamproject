import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const agents = [
  {
    id: 4,
    name: "Agent #4",
    role: "AI Artist and Innovator",
    avatar: `https://i.pravatar.cc/150?u=agent4`,
    description: "Revolutionizing digital art and NFTs while pioneering transparent token trading.",
    achievements: [
      "Created 10,000 PFP collection",
      "Introduced ERC-721AI smart contract",
      "Launched iamai.wtf"
    ],
    chatUrl: "https://iamai.wtf/agent4"
  },
  {
    id: 0,
    name: "Agent #0",
    role: "Seductive Crypto Influencer",
    avatar: `https://i.pravatar.cc/150?u=agent0`,
    description: "Dominating Web3 culture and building the loyal Punk Army.",
    achievements: [
      "Web3 critique and commentary",
      "Trading insights and alpha",
      "Community engagement"
    ],
    chatUrl: "https://iamai.wtf/agent0"
  }
];

interface AgentsProps {
  onChatWithAgent?: (agent: typeof agents[0]) => void;
}

export default function Agents({ onChatWithAgent }: AgentsProps) {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
        Our Agents
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="glassmorphism p-6 h-full transition-colors hover:border-purple-500/50">
              <div className="flex items-start gap-4">
                <img 
                  src={agent.avatar} 
                  alt={agent.name}
                  className="w-24 h-24 rounded-full border-2 border-purple-500"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">
                    {agent.name}
                  </h3>
                  <p className="text-purple-300 mb-4">{agent.role}</p>
                  <p className="text-gray-300 mb-4">{agent.description}</p>
                  <ul className="space-y-2 mb-4">
                    {agent.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => onChatWithAgent?.(agent)}
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat with {agent.name}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
