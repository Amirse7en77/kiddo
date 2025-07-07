// MainContent.tsx
import React from "react";
import CardContent from "./CardContent";

const MainContent: React.FC = () => {
  return (
    <div
      className="
         border-borderColor-1 bg-white 
        
       h-screen
        
        flex flex-col 
        gap-[12px]
      "
    >
    
      <div className="bg-white gap-[16px] mt-[16px] mx-[16px]">
        {" "}
        
        <CardContent />
        <CardContent />
        <CardContent />
         <CardContent />
          <CardContent />
           <CardContent />
      </div>
    </div>
  );
};

export default MainContent;
