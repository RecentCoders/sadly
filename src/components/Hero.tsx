
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-black">
      <div className="absolute -z-10 inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sadly-purple/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sadly-blue/30 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto section-padding flex flex-col items-center justify-center">
        <div className="w-20 h-20 mb-10 animate-fade-in">
          <div className="w-full h-full bg-gradient-sadly rounded-full animate-pulse-slow"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fade-in max-w-5xl">
          Idea to code in <span className="text-gradient">milliseconds.</span>
        </h1>
        
        <p className="text-xl text-center text-white/80 mb-12 animate-fade-in animation-delay-100 max-w-2xl">
          Sadly is your AI-powered full stack code generator.
        </p>
        
        <div className="w-full max-w-3xl bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-4 animate-fade-in-up animation-delay-200">
          <div className="flex items-center">
            <div className="flex-1 px-4 py-3 text-left text-white/50">
              Create a dashboard with GROQ integration for my...
            </div>
            <Button variant="ghost" className="text-white/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up animation-delay-300">
          <Button variant="outline" className="text-sm border-white/20 bg-white/5 hover:bg-white/10">
            Start from Figma
          </Button>
          <Button variant="outline" className="text-sm border-white/20 bg-white/5 hover:bg-white/10">
            GROQ Integration
          </Button>
          <Button variant="outline" className="text-sm border-white/20 bg-white/5 hover:bg-white/10">
            Cohere AI
          </Button>
          <Button variant="outline" className="text-sm border-white/20 bg-white/5 hover:bg-white/10">
            Clone a Website
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
