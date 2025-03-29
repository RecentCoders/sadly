
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-black relative overflow-hidden section-padding">
      <div className="absolute -z-10 inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-lovable-blue/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-lovable-yellow/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
          Build high quality software <span className="text-gradient">without writing code.</span>
        </h2>
        
        <p className="text-lg text-center text-white/70 mb-16 max-w-3xl mx-auto animate-fade-in animation-delay-100">
          Creating software has never been more accessible. With Lovable, simply describe your idea in your own words, and watch it transform into a fully functional application with beautiful aesthetics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-lovable mb-6">
              <span className="text-4xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Describe what you want to build in natural language.</h3>
          </div>
          
          <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-200">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-lovable mb-6">
              <span className="text-4xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Lovable builds your first version instantly.</h3>
          </div>
          
          <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-lovable mb-6">
              <span className="text-4xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Talk to the editor to design and extend your project.</h3>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center mt-16 animate-fade-in-up animation-delay-400">
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-lovable mb-6">
            <span className="text-4xl">4</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Share your project via link or sync your code to GitHub.</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
