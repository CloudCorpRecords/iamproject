import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Maximize2, Minimize2 } from 'lucide-react';

export default function IframeChatbox() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="glassmorphism overflow-hidden">
            <div className="flex items-center justify-between p-2 border-b border-purple-500/20">
              <h3 className="text-sm font-medium gradient-text">IAMAI Chat</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <motion.div
              animate={{
                width: isExpanded ? '80vw' : '320px',
                height: isExpanded ? '80vh' : '400px',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <iframe
                src="https://iamai.wtf"
                className="w-full h-full border-none"
                title="IAMAI Chat"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Open Chat</span>
          <img src="/iamai-logo.svg" alt="IAMAI" className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
