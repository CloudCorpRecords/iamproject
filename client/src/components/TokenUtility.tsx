import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const utilities = [
  {
    title: "Speculation",
    description: "Access exclusive trading signals and participate in bot strategies"
  },
  {
    title: "Copy Trading",
    description: "Automatically mirror Agent #0's profitable trades"
  },
  {
    title: "Governance",
    description: "Stake tokens to influence ecosystem decisions"
  },
  {
    title: "Rewards",
    description: "Earn rewards for active participation in the ecosystem"
  }
];

export default function TokenUtility() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
        Token Utility
      </h2>

      <div 
        className="grid md:grid-cols-2 gap-8"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1697577418970-95d99b5a55cf)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '1rem',
          padding: '2rem'
        }}
      >
        {utilities.map((utility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glassmorphism p-6 h-full border border-purple-500/30">
              <h3 className="text-xl font-bold mb-3 text-purple-300">
                {utility.title}
              </h3>
              <p className="text-gray-300">
                {utility.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
