// src/student/components/darsYar/chatWithBot/LessonInformation.tsx
import React from "react";

interface LessonInformationProps {
  study: string;
  lesson: string;
}

const LessonInformation: React.FC<LessonInformationProps> = ({ study, lesson }) => {
  return (
    <div className="flex justify-between items-center py-[8px] infoGradient px-[16px] fixed w-full top-[52px] z-40">
      <div>
        <h1 className="text-[14px]">پاسخ گویی با توجه به کتاب {study}</h1>
      </div>
      <div className="bg-white rounded-[16px] px-[16px] py-[4px]">
        <h1 className="text-[14px] font-extrabold">{lesson}</h1>
      </div>
    </div>
  );
};

export default LessonInformation;