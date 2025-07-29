// MainContent.tsx
import React from 'react';
import CardSelector from './CardSelector'; // CardContent is not directly used here


const MainContent: React.FC = () => {
  return (
    <div
      className='
        border-[2px] border-borderColor-1 bg-white rounded-[24px]
        p-4 
        h-full w-full 
        overflow-y-auto 
        flex flex-col 
        gap-[12px] pt-[16px] rounded-b-none border-b-0'
    >
      {/* The `gap-[12px] pt-[16px] h-full` on the outer div were a bit ambiguous.
          Moved padding and adjusted gap/flex behavior here. */}
      <div> {/* This div acts as a wrapper for CardSelector */}
        <CardSelector />
      </div>
      
    </div>
  );
};

export default MainContent;