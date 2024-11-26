import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lock } from 'lucide-react';

export default function StakingInterface() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);
  const { toast } = useToast();

  // Example data with clear indicators
  const stakingStats = {
    totalStaked: 'Example: 1,234,567 IAMAI',
    apr: 'Example: 12%',
    rewardsEarned: 'Example: 45.67 IAMAI',
    stakingPeriod: 'Example: 30 days'
  };

  const handleStake = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Coming Soon!',
      description: 'Staking functionality will be available soon. Stay tuned!',
    });
  };

  return (
    <div className="relative">
      {/* Coming Soon Badge */}
      <div className="absolute -top-4 right-0 z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-[1px] rounded-full"
        >
          <div className="bg-black px-4 py-1 rounded-full">
            <span className="text-sm font-bold gradient-text flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Coming Soon
            </span>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glassmorphism p-6 h-full relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Staking Stats Preview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Staked</span>
                  <span className="text-purple-300 font-bold">{stakingStats.totalStaked}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">APR</span>
                  <span className="text-green-400 font-bold">{stakingStats.apr}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rewards Earned</span>
                  <span className="text-purple-300 font-bold">{stakingStats.rewardsEarned}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Staking Period</span>
                  <span className="text-purple-300 font-bold">{stakingStats.stakingPeriod}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glassmorphism p-6 h-full relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Stake IAMAI
              </h3>
              <form onSubmit={handleStake} className="space-y-6">
                <div>
                  <label htmlFor="stake-amount" className="block text-sm text-gray-400 mb-2">
                    Amount to Stake
                  </label>
                  <Input
                    id="stake-amount"
                    type="number"
                    placeholder="Enter amount (Coming Soon)"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="bg-black/50 border-purple-500/30 focus:border-purple-500"
                    required
                    min="0"
                    step="0.01"
                    disabled
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                  disabled
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Coming Soon
                </Button>
              </form>
              <div className="mt-6 p-4 border border-purple-500/30 rounded-lg bg-black/30">
                <p className="text-sm text-gray-300">
                  <span className="font-bold gradient-text">🚀 Exciting Update:</span> Our staking platform is currently under development! Soon you'll be able to:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li>• Stake IAMAI tokens for rewards</li>
                  <li>• Earn competitive APR</li>
                  <li>• Participate in governance decisions</li>
                  <li>• Access exclusive features</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
