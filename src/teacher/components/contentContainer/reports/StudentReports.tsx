import React, { useState } from "react";

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
      <div className="mb-[8px] flex justify-between">
        <h1> امیر علی</h1>
        <img src={""} />
        <button className="rounded-[24px] px-[8px] py-[2px] " onClick={handleOpenModal}>  مشاهده</button>
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
