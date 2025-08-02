// src/teacher/components/contentContainer/reports/modals/ToolsModal.tsx
import React, { useState } from 'react';
import Modal from '../../Modal';
import Tools from './Tools';
import ChatButton from '../../../../../components/common/ChatButton';

interface ToolsModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  initialSelection: string;
  onConfirm: (selection: string) => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({ isModalOpen, handleCloseModal, initialSelection, onConfirm }) => {
  const [activeTool, setActiveTool] = useState<string>(initialSelection);
console.log(activeTool)
  const toolsList = [
    { name: "درس‌یار" },
    { name: "کنجکاو شو" },
    { name: "ترکیب کن" },
    { name: "آزمون ساز" },
  ];
  const allToolsOptionName = "همه ابزارها";

  const handleConfirmClick = () => {
    onConfirm(activeTool);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col pb-20'>
          <h2 className="text-center font-bold text-lg mb-4"> ابزار مد نظرتون رو انتخاب کنید.</h2>
          
          <Tools
            name={allToolsOptionName}
            isActive={activeTool === allToolsOptionName}
            onClick={setActiveTool}
          />

          {toolsList.map((tool) => (
            <Tools
              key={tool.name}
              name={tool.name}
              isActive={activeTool === tool.name}
              onClick={setActiveTool}
            />
          ))}

          <div onClick={handleConfirmClick}>
            <ChatButton textButton={'تایید'} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ToolsModal;