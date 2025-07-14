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
  const [activeTool, setActiveTool] = useState<string | null>(null); // State to hold the name of the active tool

  const handleToolClick = (toolName: string) => {
    setActiveTool(prevActiveTool =>
      prevActiveTool === toolName ? null : toolName
    );
  };

  const toolsList = [
    { name: "همه ابزار ها" },
    { name: "ابزار A" },
    { name: "ابزار B" },
    { name: "ابزار C" },
    { name: "ابزار D" },
  ];

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="لطفا ابزار مورد نظر را انتخاب نمایید">
        {toolsList.map((tool) => (
          <Tools
            key={tool.name} // Important for lists in React
            name={tool.name}
            isActive={activeTool === tool.name}
            onClick={handleToolClick}
          />
        ))}

         <div onClick={handleCloseModal}>
          <ChatButton textButton={'تایید'} />
        </div>
      </Modal>
    </div>
  );
}

export default ToolsModal;