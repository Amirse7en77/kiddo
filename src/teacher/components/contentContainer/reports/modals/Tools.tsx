// src/components/ToolsModal/Tools.tsx
import React from 'react';

interface ToolsProps {
  name: string; // Add a name prop to identify each tool
  isActive: boolean;
  onClick: (name: string) => void;
}

const Tools: React.FC<ToolsProps> = ({ name, isActive, onClick }) => {
console.log(isActive)
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className='mb-[12px]' onClick={handleClick}>
      <div className={` ${isActive ? 'onClickedButton-box transform translate-y-1' : 'buttonClicked-box'}  `}> {/* Added a class for active state */}
        <div className={`${isActive ? 'bg-backGroundCard' : 'bg-white'} flex justify-start items-center  rounded-[16px] p-[16px] gap-[16px] pl-[24px]`}>
          <h1>{name}</h1> 
        </div>
      </div>
    </div>
  );
};

export default Tools;