import React from "react";

interface TopicCardProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  isDisabled?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, isSelected, onClick, isDisabled }) => {
  return (
    <div>
      <div
        className={`
          ${isSelected ? "onClickedButton-box transform translate-y-1" : "buttonClicked-box"}
          inline-block
          ${isDisabled ? 'pointer-events-none' : ''} // Prevent clicks when disabled
        `}
      >
        <div
          className={`
            py-[8px] px-[16px] rounded-[16px]
            ${isSelected ? "bg-backGroundCard" : "bg-white"}
            ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} 
          `}
          onClick={onClick}
        >
          <div className="flex justify-start items-center">
            <h1 className="text-[14px] font-extrabold whitespace-nowrap">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;