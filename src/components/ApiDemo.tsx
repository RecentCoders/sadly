
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateCodeWithGroq, generateEmbeddingsWithCohere } from '@/lib/api-services';
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { Loader } from 'lucide-react';
import ApiKeyManager from './ApiKeyManager';

const ApiDemo: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('Generate a simple React component that displays a counter.');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [activeDemo, setActiveDemo] = useState<'groq' | 'cohere'>('groq');
  const isMobile = useIsMobile();

  const handleGroqDemo = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const generatedCode = await generateCodeWithGroq(prompt);
      setResult(generatedCode || 'No result returned');
      
      toast({
        title: "Code Generated",
        description: "GROQ has successfully generated code based on your prompt.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error in GROQ demo:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate code. Check your API key.",
        variant: "destructive",
        duration: 5000,
      });
      setResult('Error: Failed to generate code. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCohereDemo = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const embeddings = await generateEmbeddingsWithCohere(prompt);
      setResult(JSON.stringify(embeddings, null, 2));
      
      toast({
        title: "Embeddings Generated",
        description: "Cohere has successfully generated embeddings for your text.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error in Cohere demo:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate embeddings. Check your API key.",
        variant: "destructive",
        duration: 5000,
      });
      setResult('Error: Failed to generate embeddings. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-black relative">
      <div className="absolute -z-10 inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sadly-blue/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sadly-purple/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Try the <span className="text-gradient">API</span> yourself
        </h2>
        
        <ApiKeyManager />
        
        <div className="mt-10 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-2 bg-black/60 p-1 rounded-lg mb-6">
            <Button 
              variant={activeDemo === 'groq' ? 'default' : 'outline'} 
              onClick={() => setActiveDemo('groq')}
              className={activeDemo === 'groq' ? 'bg-gradient-sadly' : 'bg-black/20'}
            >
              GROQ Demo
            </Button>
            <Button 
              variant={activeDemo === 'cohere' ? 'default' : 'outline'} 
              onClick={() => setActiveDemo('cohere')}
              className={activeDemo === 'cohere' ? 'bg-gradient-sadly' : 'bg-black/20'}
            >
              Cohere Demo
            </Button>
          </div>
          
          <Card className="glass-card w-full max-w-4xl overflow-hidden">
            <CardHeader>
              <CardTitle>
                {activeDemo === 'groq' ? 'GROQ Code Generation' : 'Cohere Embeddings'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Textarea 
                  placeholder={activeDemo === 'groq' 
                    ? "Enter a prompt to generate code..." 
                    : "Enter text to generate embeddings..."
                  }
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={5}
                  className="bg-black/40 border-white/20"
                />
              </div>
              
              <Button 
                onClick={activeDemo === 'groq' ? handleGroqDemo : handleCohereDemo} 
                disabled={loading || !prompt.trim()}
                className="w-full bg-gradient-sadly hover:opacity-90 transition-opacity"
              >
                {loading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Generate {activeDemo === 'groq' ? 'Code' : 'Embeddings'}</>
                )}
              </Button>
              
              {result && (
                <div className="mt-4">
                  <div className="text-sm font-medium mb-1">Result:</div>
                  <div className="bg-[#1e1e1e] rounded-lg p-4 max-h-[400px] overflow-auto whitespace-pre-wrap font-mono text-white/90 text-sm">
                    {result}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApiDemo;
