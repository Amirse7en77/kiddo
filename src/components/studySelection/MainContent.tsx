// MainContent.tsx
import React from 'react';
import CardSelector from './CardSelector'; // CardContent is not directly used here


const MainContent: React.FC = () => {
  return (
    <div
      className='
        border-2 border-borderColor-1 bg-white rounded-[16px]
        p-4 sm:p-6 md:p-8 lg:p-10 
        h-full w-full 
        overflow-y-auto 
        flex flex-col 
      '
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