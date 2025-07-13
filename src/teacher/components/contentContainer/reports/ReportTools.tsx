import React, { useState } from "react";
import LessonModal from "./modals/LessonModal";
import ToolsModal from "./modals/ToolsModal";

interface ReportType {
  title: string;
}

const ReportTools: React.FC<ReportType> = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="card-box">
      <div className="flex justify-start items-center bg-white rounded-[22px] p-[16px]  ">
       <button onClick={handleOpenModal}>
         <div className="flex   ">
          <h1 className="font-extrabold  text-[14px]"> {title}</h1>
        </div>
       </button>
       {title==='همه درس ها' ? (<LessonModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen}/>) :(<ToolsModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen}/>)}
       
      </div>
    </div>
  );
};

export default ReportTools;
