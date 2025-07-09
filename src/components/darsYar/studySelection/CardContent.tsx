// CardContent.tsx
import React from "react";
import riazi from "./../../../assets/images/riazi.png";

interface CardContentProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const CardContent: React.FC<CardContentProps> = ({
  title,
  isSelected,
  onClick,
}) => {
  return (
    <div className={`${isSelected ? `onClickedCard-box  transform 
   translate-y-1` : "card-box"}`}>
      {" "}
      <div
        className={`
          rounded-[24px]   cursor-pointer
          transition-colors duration-200 
          flex flex-col 
          overflow-hidden 
          h-full 
          ${isSelected?`bg-backGroundCard ` :"bg-white"}
        `}
        onClick={onClick}
      >
        <img
          src={riazi}
          className=" w-full h-auto object-contain"
          alt={title}
        />

        <div
          className="
          p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 
          text-center  flex flex-col justify-center items-center 
        "
        >
          <h1
            className="
            text-sm 
            font-semibold
            pb-0 mt-0 
          "
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
