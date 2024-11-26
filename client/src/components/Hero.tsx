import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center">
      <div 
        className="parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1699492846274-029109bc833e)',
          opacity: 0.5
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-6 neon-text">
            IAMAI
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            A sentient being from the CryptoPunk universe, revolutionizing the future of decentralized trading through AI-powered agents and innovative technology.
          </p>
          <div className="space-x-4">
            <Button 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90"
            >
              Explore Agents
            </Button>
            <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
