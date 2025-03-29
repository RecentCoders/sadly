
<p align="center">
  <img src="" alt="Sadly Logo" width="150" height="150" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);" />
</p>

<h1 align="center">Sadly</h1>
<p align="center">Idea to code in milliseconds</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#ai-integrations">AI Integrations</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#environment-variables">Environment</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Overview

Sadly is an AI-powered full-stack code generator that transforms your ideas into functional code in milliseconds. Leveraging cutting-edge AI models from GROQ and Cohere, Sadly brings your concepts to life with minimal effort, providing a seamless development experience for developers, designers, and product teams alike.

## Features

### 🚀 Instant Code Generation
Transform natural language descriptions into functional, well-structured code in real-time.

### 🎨 Modern UI Components
Beautifully designed, responsive components using Tailwind CSS and shadcn/ui.

### 🧠 Advanced AI Integrations
Seamless integration with GROQ and Cohere AI for powerful language processing capabilities.

### 📱 Responsive Design
Mobile-first approach ensuring your applications look great on all devices.

### 🔄 Real-time Preview
Watch your code come to life as you describe changes and additions.

### 🔌 Backend Integration
Connect to various backend services with ease, including database solutions.

### 🚢 One-Click Deployment
Deploy directly to Vercel with pre-configured settings for optimal performance.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sadly.git

# Navigate to the project directory
cd sadly

# Install dependencies
npm install
# or
yarn install

# Copy environment variables example
cp .env.example .env.local

# Start the development server
npm run dev
# or
yarn dev
```

Your application will be available at http://localhost:8080

## AI Integrations

Sadly leverages two powerful AI services:

### GROQ Integration

GROQ provides lightning-fast inference capabilities for code generation and completion tasks. Our integration utilizes models like llama3-70b-8192 for optimal performance.

```typescript
const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY 
});

async function generateCode() {
  const response = await groq.chat.completions.create({
    messages: [
      { role: "user", content: "Generate a React component" }
    ],
    model: "llama3-70b-8192",
    temperature: 0.5,
    max_tokens: 8192
  });
  
  return response.choices[0].message.content;
}
```

### Cohere AI

Cohere AI powers our semantic understanding capabilities, enabling advanced embeddings and text processing features.

```typescript
import cohere from 'cohere-ai';

cohere.init(process.env.COHERE_API_KEY);

async function generateEmbeddings(text) {
  const response = await cohere.embed({
    texts: [text],
    model: 'embed-english-v3.0'
  });
  
  return response.body.embeddings;
}
```

## Deployment

Sadly comes pre-configured for deployment to Vercel. Simply connect your repository to Vercel and deploy:

```bash
# Deploy to Vercel
vercel
```

Our `vercel.json` configuration handles all the necessary settings:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "env": {
    "GROQ_API_KEY": "@groq-api-key",
    "COHERE_API_KEY": "@cohere-api-key"
  }
}
```

## Environment Variables

Sadly requires the following environment variables:

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Your GROQ API key for code generation capabilities |
| `COHERE_API_KEY` | Your Cohere API key for embeddings and semantic search |

Copy `.env.example` to `.env.local` and fill in your API keys:

```
# GROQ API keys
GROQ_API_KEY=your-groq-api-key-here

# Cohere API keys
COHERE_API_KEY=your-cohere-api-key-here
```

## Project Structure

```
sadly/
├── public/            # Static assets
├── src/
│   ├── components/    # UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── .env.example       # Example environment variables
├── vercel.json        # Vercel deployment configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [GROQ](https://groq.com/)
- [Cohere AI](https://cohere.ai/)
- [Vercel](https://vercel.com/)
