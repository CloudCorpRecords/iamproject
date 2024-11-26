import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Alpha Chat Integration",
    description: "Real-time analysis of Telegram, Discord, and Twitter signals"
  },
  {
    title: "Technical Analysis",
    description: "Advanced indicators and risk management systems"
  },
  {
    title: "Solana Integration",
    description: "Direct trading on Solana-based DEXs"
  },
  {
    title: "Copy Trading",
    description: "Mirror Agent #0's trades automatically"
  }
];

export default function TradingBot() {
  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1649274496773-c40eacd66e2d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}
      />
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
          Trading Bot
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glassmorphism p-6 h-full">
                <h3 className="text-xl font-bold mb-3 text-purple-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-300">
            Powered by advanced AI and machine learning, our trading bot combines alpha chat insights with traditional trading strategies for optimal performance.
          </p>
        </div>
      </div>
    </section>
  );
}
