# IAMAI Landing Page

A cyberpunk-themed landing page for the IAMAI project featuring interactive agents, real-time crypto tracking, and advanced chat functionality.

## Features
- Matrix rain animation effect
- Real-time cryptocurrency price tracking (BTC, ETH, SOL)
- Interactive AI agent chat system
- Expandable iframe integration with iamai.wtf
- Token staking interface (preview)
- Newsletter subscription system
- Responsive design with cyberpunk aesthetics

## Tech Stack
- React + TypeScript
- Framer Motion for animations
- TailwindCSS for styling
- Express.js backend
- OpenAI API integration
- CoinGecko API integration

## Getting Started

### Prerequisites
- Node.js 20+
- OpenAI API key

### Installation
1. Clone the repository
2. Run `npm install`
3. Create .env file and add your `OPENAI_API_KEY`
4. Run `npm run dev` to start development server

## Contributing

We welcome contributions! Here's how you can help:

### Areas for Contribution
1. Enhanced Agent Personalities
2. Additional Trading Features
3. UI/UX Improvements
4. Performance Optimizations
5. Documentation

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch
3. Follow code style and conventions
4. Write meaningful commit messages
5. Submit a pull request

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful comments
- Include unit tests for new features

## Project Structure Guide

Our codebase is organized as follows:

#### Frontend Components (client/src/components/)
- Hero.tsx - Landing page hero section
- Agents.tsx - AI agent profiles and chat integration
- TradingBot.tsx - Cryptocurrency price tracking interface
- TradingStats.tsx - Real-time crypto market statistics
- TokenUtility.tsx - Token staking preview interface
- MatrixRain.tsx - Cyberpunk matrix animation effect
- IframeChatbox.tsx - Expandable chat window component
- Newsletter.tsx - Email subscription component

#### Core Features
- OpenAI Chat Integration: server/routes/chat.ts
- Real-time Crypto Data: client/src/components/TradingStats.tsx
- Agent Personalities: $IAMAI.txt
- Animation Effects: client/src/lib/animations.ts

#### Development
This project is currently hosted on Replit, which provides an integrated development environment and hosting solution. However, we welcome contributions through GitHub:

1. Fork the repository
2. Make your changes locally
3. Test on your own Replit instance
4. Submit a pull request to our GitHub repository

The changes will be reviewed and, if approved, deployed to our main Replit instance.

## License
MIT License

## Contact
[Project Contact Information]
