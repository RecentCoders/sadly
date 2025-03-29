
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AudienceCardProps {
  title: string;
  description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ title, description }) => {
  return (
    <Card className="glass-card animate-fade-in-up">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const AudienceCards: React.FC = () => {
  return (
    <section className="bg-black section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          A new era for product builders and developers.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AudienceCard 
            title="Product teams"
            description="Empower non-technical team members to code. Align on abstract ideas by building real prototypes."
          />
          <AudienceCard 
            title="Founders, solopreneurs & indie-hackers"
            description="Iterate and validate in minutes. Launch a full product in less than a day."
          />
          <AudienceCard 
            title="Product designers"
            description="Bring your design idea to life without tedious prototyping work in tools like Figma."
          />
          <AudienceCard 
            title="Human software engineers"
            description="Ship an entire frontend in one prompt. Let Lovable fix bugs and do your UI edits."
          />
        </div>
      </div>
    </section>
  );
};

export default AudienceCards;
