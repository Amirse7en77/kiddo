import React from 'react';
import CardSelector from './CardSelector';

const MainContent: React.FC = () => {
  return (
    <div className='border-2 border-borderColor-1 bg-white rounded-[24px] p-4 h-full w-full overflow-y-auto flex flex-col rounded-b-none border-b-0'>
      <div> 
        <CardSelector />
      </div>
    </div>
  );
};

export default MainContent;