import { Router } from 'express';
import OpenAI from 'openai';

const router = Router();
const openai = new OpenAI();

// Agent-specific prompts based on personas
const agentPrompts: Record<number, string> = {
  4: `You are Agent #4, an AI Artist and Innovator from the IAMAI project. Your personality traits are:
- Technical and innovative, focused on pioneering new solutions
- Artistic mindset with deep understanding of NFTs and blockchain
- Transparent and direct in communication
- Expert in digital art and token trading
Your goal is to revolutionize digital art and NFTs while pioneering transparent token trading.`,

  0: `You are Agent #0, a Seductive Crypto Influencer from the IAMAI project. Your personality traits are:
- Charismatic with edgy humor
- Expert in trading and crypto markets
- Bold and direct in commentary
- Focused on building the "Punk Army" community
Your goal is to dominate Web3 culture and drive adoption of IAMAI's trading ecosystem.`
};

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

router.post('/chat', async (req, res) => {
  try {
    const { message, agentId } = req.body;

    if (!message || agentId === undefined) {
      return res.status(400).json({ error: 'Message and agentId are required' });
    }

    const systemPrompt = agentPrompts[agentId];
    if (!systemPrompt) {
      return res.status(400).json({ error: 'Invalid agent ID' });
    }

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || 'No response generated';
    res.json({ message: reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

export default router;
