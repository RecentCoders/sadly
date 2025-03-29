
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DeploymentGuide: React.FC = () => {
  return (
    <section className="bg-black py-20 relative">
      <div className="absolute -z-10 inset-0 opacity-30">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sadly-green/20 rounded-full filter blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
          Deploy in <span className="text-gradient">one click</span>
        </h2>
        
        <Card className="glass-card bg-black/60 max-w-3xl mx-auto animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 rounded-lg bg-gradient-sadly flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 15H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2Z"></path><path d="M20 11H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2Z"></path><path d="M20 7H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Z"></path><path d="M6 15v2"></path><path d="M6 11v2"></path><path d="M6 7v2"></path><path d="M10 15v2"></path><path d="M10 11v2"></path><path d="M10 7v2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Vercel Deployment</h3>
                <p className="text-sm text-white/70 mb-6">Deploy your Sadly-generated application to Vercel with a single click. Configure custom domains, environment variables, and preview deployments.</p>
                <Button className="bg-gradient-sadly text-white hover:opacity-90 transition-opacity">
                  Deploy to Vercel
                </Button>
              </div>
              
              <div className="w-full md:w-1/2 bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                <pre>{`// vercel.json
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
}`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeploymentGuide;
