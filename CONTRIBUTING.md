# Contributing to IAMAI Landing Page

Thank you for your interest in contributing to the IAMAI Landing Page project! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies with `npm install`
4. Create a new branch for your feature/fix
5. Make your changes
6. Test your changes
7. Submit a pull request

## Prerequisites

- Node.js 20+
- npm
- OpenAI API key (for development)

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iamai-landing.git
cd iamai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and API clients
│   │   └── pages/        # Page components
├── server/                # Backend Express application
│   ├── routes/           # API routes
│   └── index.ts          # Server entry point
```

## Code Style Guidelines

1. **TypeScript**
   - Use TypeScript strict mode
   - Define proper types and interfaces
   - Avoid using `any` type

2. **React**
   - Use functional components
   - Use hooks appropriately
   - Follow React best practices

3. **Styling**
   - Use TailwindCSS for styling
   - Follow the existing color scheme and theme
   - Maintain responsive design

4. **Documentation**
   - Document complex functions and components
   - Include JSDoc comments for public APIs
   - Update README.md when adding new features

## Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Commit Messages**
   - Use clear and descriptive commit messages
   - Follow conventional commits format:
     - feat: Add new feature
     - fix: Bug fix
     - docs: Documentation changes
     - style: Code style changes
     - refactor: Code refactoring
     - test: Adding tests
     - chore: Maintenance tasks

3. **Testing**
   - Write tests for new features
   - Ensure existing tests pass
   - Test across different screen sizes

## Submitting Changes

1. **Before Submitting**
   - Run tests: `npm test`
   - Check code formatting: `npm run format`
   - Update documentation if needed
   - Ensure your branch is up to date with main

2. **Pull Request**
   - Create a pull request from your fork
   - Fill out the PR template completely
   - Link any related issues
   - Provide clear description of changes

## Getting Help

- Open an issue for bug reports
- Use discussions for questions
- Join our community chat for real-time help

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We expect all contributors to abide by its terms.

## License

By contributing to IAMAI Landing Page, you agree that your contributions will be licensed under its MIT license.
