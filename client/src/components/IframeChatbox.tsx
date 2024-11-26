import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Maximize2, Minimize2, MessageSquare, Send, Loader2 } from 'lucide-react';
import { sendChatMessage } from '@/lib/api';

interface Agent {
  id: number;
  name: string;
  avatar: string;
}

interface IframeChatboxProps {
  currentAgent?: Agent | null;
  onClose?: () => void;
  position?: number;
  isIframe?: boolean;
  iframeUrl?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function IframeChatbox({ 
  currentAgent, 
  onClose, 
  position = 0,
  isIframe = false,
  iframeUrl
}: IframeChatboxProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
    setMessages([]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !currentAgent || isLoading) return;

    const userMessage = {
      role: 'user' as const,
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        message: userMessage.content,
        agentId: currentAgent.id,
      });

      if (response.error) {
        throw new Error(response.error);
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response.message,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatPosition = position * 420; // 400px height + 20px gap

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{ bottom: `${chatPosition + 16}px` }}
          className="fixed right-4 z-50"
        >
          <div className="glassmorphism overflow-hidden">
            <div className="flex items-center justify-between p-2 border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                {currentAgent && !isIframe && (
                  <img 
                    src={currentAgent.avatar}
                    alt={currentAgent.name}
                    className="w-6 h-6 rounded-full border border-purple-500"
                  />
                )}
                <h3 className="text-sm font-medium gradient-text">
                  {isIframe ? 'IAMAI Chat' : currentAgent ? `Chat with ${currentAgent.name}` : 'Chat'}
                </h3>
              </div>
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
                  onClick={handleClose}
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
              className="flex flex-col"
            >
              {isIframe ? (
                <iframe
                  src={iframeUrl}
                  className="w-full h-full border-none"
                  title="IAMAI Chat"
                />
              ) : (
                <>
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            message.role === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.role === 'user'
                                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500'
                                : 'bg-gray-800'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <span className="text-xs text-gray-300 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  <form
                    onSubmit={handleSendMessage}
                    className="border-t border-purple-500/20 p-2 flex gap-2"
                  >
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      disabled={!currentAgent || isLoading}
                      className="bg-black/50 border-purple-500/30 focus:border-purple-500"
                    />
                    <Button
                      type="submit"
                      disabled={!currentAgent || isLoading}
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
