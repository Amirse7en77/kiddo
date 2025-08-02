import React from "react";


interface ReportToolsProps {
  title: string;
  onClick: () => void;
  image: string;
  isSelected?: boolean;
}

const ReportTools: React.FC<ReportToolsProps> = ({ title, onClick, image, isSelected = false }) => {
  const isDefaultSelection = title === 'همه درس‌ها' || title === 'همه ابزارها';
  const shouldShowPurple = isSelected && !isDefaultSelection;

  return (
    <div className={`${shouldShowPurple ? 'onClicked-box' : 'buttonClicked-box'} buttonClicked-box w-full`}>
      <div className={`flex justify-start items-center rounded-[16px] p-[16px] py-[4px] ${
        shouldShowPurple ? 'bg-[#F2EFFF]' : 'bg-white'
      }`}>
       <button onClick={onClick} className="w-full ">
         <div className="flex justify-around items-center">
          <div className="flex justify-start items-center">
            <img src={image} className="pl-[8px]"/>
          <h1 className={`text-[14px] `}>{title}</h1>
          </div>
         <div>
           <button className='flex-shrink-0 mt-1'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform='rotate(270)'>
            <path d="M15.7071 16.7071C16.0976 16.3166 16.0976 15.6834 15.7071 15.2929L10.4142 10L15.7071 4.70711C16.0976 4.31658 16.0976 3.68342 15.7071 3.29289C15.3166 2.90237 14.6834 2.90237 14.2929 3.29289L8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071Z" fill={ "#333333"}/>
          </svg>
        </button>
         </div>
        </div>
       </button>
      </div>
    </div>
  );
};
export default ReportTools;