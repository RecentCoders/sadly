
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="glass-card hover:bg-white/10 transition-colors">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-lovable flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureShowcase: React.FC = () => {
  return (
    <section className="bg-black section-padding relative">
      <div className="absolute -z-10 inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lovable-purple/20 rounded-full filter blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center animate-fade-in">
          A superhuman full stack product engineer.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
          <FeatureCard 
            title="Instant & intuitive"
            description="Live rendering, handles image input, has instant undo and lets you collaborate with branching. The AI fixes your bugs. One-click deploy when ready."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>}
          />
          <FeatureCard 
            title="Beautiful design"
            description="We believe your product should look good. Lovable follows best practice UI & UX principles to make sure every idea you bring to life is beautifully designed."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>}
          />
          <FeatureCard 
            title="Support any backend"
            description="Lovable has support for databases, API integrations and back-end functionality. Connect your own or use our Supabase connector."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"></path><path d="M10 7H5a2 2 0 0 0-2 2v11h20V9a2 2 0 0 0-2-2h-5"></path><path d="M8 22V7l8-5v20"></path><path d="M7 10.5V7"></path><path d="M17 10.5V7"></path></svg>}
          />
          <FeatureCard 
            title="Select & edit"
            description="The accuracy you need to make fine grained changes. With Select & Edit you click an element and describe what you want updated."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path><path d="M14 2v6h6"></path><path d="M3 15h8"></path><path d="M7 11v8"></path></svg>}
          />
        </div>
        
        <div className="mt-10 animate-fade-in-up animation-delay-300">
          <Card className="glass-card bg-black/60">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-lovable flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Github integration</h3>
              <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                <pre>{`import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

const result = streamText({
  model: groq('deepseek-r1-distill-llama-70b'),
  prompt: 'Invent a new holiday and describe its traditions.',
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}`}</pre>
              </div>
              <p className="text-sm text-white/70 mt-4">Connect Lovable to your GitHub account to automatically sync the code to your repository. Perfect for project hand offs and more advanced workflows.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
