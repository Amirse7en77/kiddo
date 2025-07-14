import React, { useState } from "react";
import Modal from "../Modal";
import StudentModal from "./modals/StudentModal";

const StudentReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mb-[32px]">
      <div className="mb-[8px]">
        <h1> امیر علی</h1>
        <img src={""} />
        <button onClick={handleOpenModal}>باز کردن modal</button>
      </div>
      <div>
        <h1 className="text-[12px]">
          دانش آموز دنبال تقلب کردن در امتحانات است و میخواد هرجور شده درس نخونه
          وگرنه تهدید به خودکشی میکنه!
        </h1>
    
      </div>
      <StudentModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen}/>
    </div>
  );
};

export default StudentReports;
