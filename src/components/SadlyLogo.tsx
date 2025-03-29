
import React from "react";

const SadlyLogo: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="w-32 h-32 relative">
        <div className="absolute inset-0 border-2 border-white hexagon flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full absolute left-1/3 top-1/2"></div>
          <div className="w-6 h-6 flex items-center justify-center absolute right-1/3 top-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-8 h-2 bg-white rounded-full absolute bottom-1/3 left-1/2 transform -translate-x-1/2 rotate-12"></div>
        </div>
      </div>
    </div>
  );
};

export default SadlyLogo;
