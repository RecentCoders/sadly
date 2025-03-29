
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AIIntegration: React.FC = () => {
  return (
    <section className="bg-black py-20 relative">
      <div className="absolute -z-10 inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sadly-blue/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sadly-purple/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          Powered by <span className="text-gradient">advanced AI models</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card bg-black/60 animate-fade-in-up">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-sadly flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">GROQ Integration</h3>
              <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                <pre>{`import { Groq } from 'groq';

const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY 
});

async function generateCode(prompt) {
  const response = await groq.chat.completions.create({
    messages: [
      { role: "user", content: prompt }
    ],
    model: "llama3-70b-8192",
    temperature: 0.5,
    max_tokens: 8192,
    top_p: 0.9
  });
  
  return response.choices[0].message.content;
}`}</pre>
              </div>
              <p className="text-sm text-white/70 mt-4">Fast, efficient code generation with GROQ's advanced models. Generate components, entire applications, or fix bugs in milliseconds.</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card bg-black/60 animate-fade-in-up animation-delay-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-sadly flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cohere AI</h3>
              <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                <pre>{`import cohere from 'cohere-ai';

cohere.init(import.meta.env.VITE_COHERE_API_KEY);

async function generateEmbeddings(text) {
  const response = await cohere.embed({
    texts: [text],
    model: 'embed-english-v3.0'
  });
  
  return response.body.embeddings;
}`}</pre>
              </div>
              <p className="text-sm text-white/70 mt-4">Leverage Cohere's powerful embeddings and large language models to enhance your application with semantic search, classification, and natural language understanding.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;
