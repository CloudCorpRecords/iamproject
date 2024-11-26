import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function StakingInterface() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);
  const { toast } = useToast();

  // Mock data - would be replaced with real data from blockchain
  const stakingStats = {
    totalStaked: '1,234,567 IAMAI',
    apr: '12%',
    rewardsEarned: '45.67 IAMAI',
    stakingPeriod: '30 days'
  };

  const handleStake = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsStaking(true);
    
    try {
      // Mock staking action
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Success!',
        description: `Successfully staked ${stakeAmount} IAMAI tokens.`,
      });
      setStakeAmount('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to stake tokens. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsStaking(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glassmorphism p-6 h-full">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Staking Stats
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
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="glassmorphism p-6 h-full">
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
                placeholder="Enter amount"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="bg-black/50 border-purple-500/30 focus:border-purple-500"
                required
                min="0"
                step="0.01"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              disabled={isStaking}
            >
              {isStaking ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              {isStaking ? 'Staking...' : 'Stake Now'}
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-400">
            Note: Minimum staking period is 30 days. Early unstaking may result in reduced rewards.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
