import React from "react";


interface ReportToolsProps {
  title: string;
  onClick: () => void;
  image: string;
}

const ReportTools: React.FC<ReportToolsProps> = ({ title, onClick ,image}) => {
  return (
    <div className="card-box w-full">
      <div className="flex justify-start items-center bg-white rounded-[22px] p-[16px] py-[4px]">
       <button onClick={onClick} className="w-full ">
         <div className="flex justify-start items-center">
          <img src={image} className="p-[8px]"/>
          <h1 className="font-extrabold text-[14px]">{title}</h1>
        </div>
       </button>
      </div>
    </div>
  );
};
export default ReportTools;