
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ApiKeyManager: React.FC = () => {
  const [groqKey, setGroqKey] = useState<string>(localStorage.getItem('groq_api_key') || '');
  const [cohereKey, setCohereKey] = useState<string>(localStorage.getItem('cohere_api_key') || '');
  const [hasEnvKeys, setHasEnvKeys] = useState<boolean>(false);

  useEffect(() => {
    // Check if env variables are set
    const hasGroqEnv = import.meta.env.VITE_GROQ_API_KEY ? true : false;
    const hasCohereEnv = import.meta.env.VITE_COHERE_API_KEY ? true : false;
    setHasEnvKeys(hasGroqEnv && hasCohereEnv);
  }, []);

  const saveKeys = () => {
    if (groqKey) localStorage.setItem('groq_api_key', groqKey);
    if (cohereKey) localStorage.setItem('cohere_api_key', cohereKey);
    
    toast({
      title: "API Keys Saved",
      description: "Your API keys have been saved to local storage.",
      duration: 3000,
    });
  };

  if (hasEnvKeys) {
    return null; // Don't render if env variables are set
  }

  return (
    <Card className="glass-card w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-gradient">API Key Setup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="groq-key">GROQ API Key</Label>
          <Input 
            id="groq-key"
            type="password" 
            value={groqKey} 
            onChange={(e) => setGroqKey(e.target.value)} 
            placeholder="Enter your GROQ API key"
            className="bg-black/40 border-white/20"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cohere-key">Cohere API Key</Label>
          <Input 
            id="cohere-key"
            type="password" 
            value={cohereKey} 
            onChange={(e) => setCohereKey(e.target.value)} 
            placeholder="Enter your Cohere API key"
            className="bg-black/40 border-white/20"
          />
        </div>
        
        <Button 
          onClick={saveKeys} 
          className="w-full bg-gradient-sadly hover:opacity-90 transition-opacity"
        >
          Save API Keys
        </Button>
        
        <p className="text-xs text-white/60 text-center">
          Your keys are stored only in your browser's local storage and are not sent to our servers.
          <br />
          For production use, please set environment variables.
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiKeyManager;
