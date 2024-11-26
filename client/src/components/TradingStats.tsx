import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Activity, TrendingUp } from 'lucide-react';

interface StatItem {
  label: string;
  value: string | number;
  change: number;
  icon: JSX.Element;
}

export default function TradingStats() {
  const [stats, setStats] = useState<StatItem[]>([
    {
      label: '24h Volume',
      value: '$1.2M',
      change: 12.5,
      icon: <Activity className="h-4 w-4" />,
    },
    {
      label: 'Total Trades',
      value: '2,456',
      change: 8.3,
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: 'Win Rate',
      value: '76%',
      change: 5.2,
      icon: <ArrowUp className="h-4 w-4" />,
    },
    {
      label: 'Avg. Return',
      value: '3.2%',
      change: -1.5,
      icon: <ArrowDown className="h-4 w-4" />,
    },
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          change: +(stat.change + (Math.random() * 2 - 1)).toFixed(1),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="glassmorphism p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">{stat.label}</span>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className={`flex items-center text-sm ${
              stat.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.change >= 0 ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              {Math.abs(stat.change)}%
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
