
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-lovable rounded-full animate-pulse-slow"></div>
          <span className="font-bold text-xl text-white">lovable</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Templates</a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Careers</a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">News</a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Docs</a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-sm px-4 py-2 h-auto border-white/20 hover:bg-white/10 transition-colors">
            Sign in
          </Button>
          <Button className="text-sm bg-white text-black hover:bg-white/90 px-4 py-2 h-auto transition-colors">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
