import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Activity, TrendingUp, DollarSign, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface CryptoData {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

const formatNumber = (num: number): string => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
};

export default function TradingStats() {
  const { data: cryptoData, isLoading, error } = useQuery({
    queryKey: ['crypto-prices'],
    queryFn: async () => {
      const response = await axios.get<CryptoData[]>(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana',
            order: 'market_cap_desc',
            per_page: 3,
            page: 1,
            sparkline: false,
          },
        }
      );
      return response.data;
    },
    refetchInterval: 60000, // Refetch every minute
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Failed to load cryptocurrency data. Please try again later.
      </div>
    );
  }

  const stats = cryptoData?.map((coin) => [
    {
      label: `${coin.symbol.toUpperCase()} Price`,
      value: formatNumber(coin.current_price),
      change: coin.price_change_percentage_24h,
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      label: `${coin.symbol.toUpperCase()} Volume`,
      value: formatNumber(coin.total_volume),
      change: coin.price_change_percentage_24h,
      icon: <Activity className="h-4 w-4" />,
    },
    {
      label: `${coin.symbol.toUpperCase()} Market Cap`,
      value: formatNumber(coin.market_cap),
      change: coin.price_change_percentage_24h,
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ]).flat() ?? [];

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
