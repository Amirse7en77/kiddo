// src/components/ToolsModal/ToolsModal.tsx
import React, { useState } from 'react';
import Modal from '../../Modal';
import Tools from './Tools';
import ChatButton from '../../../../../components/common/ChatButton';

interface StudentModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const ToolsModal: React.FC<StudentModalProps> = ({ isModalOpen, handleCloseModal }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  console.log("Current Active Tool:", activeTool); // More descriptive console log

  const handleToolClick = (toolName: string) => {
    // If the clicked tool is already active, deactivate it (set to null)
    // Otherwise, set the clicked tool as the new active tool
    setActiveTool(prevActiveTool =>
      prevActiveTool === toolName ? null : toolName
    );
    console.log("Clicked Tool:", toolName); // More descriptive console log
  };

  const toolsList = [
    { name: "ابزار A" },
    { name: "ابزار B" },
    { name: "ابزار C" },
    { name: "ابزار D" },
  ];

  const allToolsOptionName = "همه درس ها";

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="لطفا درس مورد نظر را انتخاب نمایید">

        {/* "همه درس ها" option */}
        <div
          className='mb-[12px] cursor-pointer'
          onClick={() => handleToolClick(allToolsOptionName)}
        >
          <div className={`
            ${activeTool === allToolsOptionName ? 'onClickedButton-box transform translate-y-1' : 'buttonClicked-box'}
          `}>
            <div className={`
              flex justify-start items-center rounded-[16px] p-[16px] gap-[16px] pl-[24px]
              ${activeTool === allToolsOptionName ? 'bg-backGroundCard' : 'bg-white'}
            `}>
              <h1>همه درس</h1>
            </div>
          </div>
        </div>

        {/* Grid for other tools */}
        <div className='grid grid-cols-2'>
          {toolsList.map((tool) => (
            <Tools
              key={tool.name}
              name={tool.name}
              isActive={activeTool === tool.name}
              onClick={handleToolClick}
            />
          ))}
        </div>

        <ChatButton textButton={'تایید'} />
      </Modal>
    </div>
  );
};

export default ToolsModal;