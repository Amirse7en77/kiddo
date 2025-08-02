// CardContent.tsx
import React, { useEffect } from "react"; // Import useEffect
import riazi from "./../../../../assets/images/riazi.png";
import { useDispatch } from "react-redux";
import { activeButtonReducer, disableButtonReducer } from "../../../../slice/darsyarSlice";

interface CardContentProps {
  name: string;
  image:string;
  selectId: string|null;
  isSelected:boolean
  onClick: () => void;
}

const CardContent: React.FC<CardContentProps> = ({
  name,
  selectId,
  image,
  isSelected,
  onClick,
}) => {
  const dispatch = useDispatch();


  useEffect(() => {
    if (selectId) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [selectId, dispatch]); 

  return (
    <div className={`${isSelected ? `onClickedCard-box` : "card-box"}`}>
      {" "}
      <div
        className={`
          rounded-[24px] cursor-pointer
          transition-colors duration-200 
          flex flex-col 
          overflow-hidden 
          h-full 
          ${isSelected ? `bg-backGroundCard` : "bg-white"}
        `}
        onClick={onClick}
      >
        <img
          src={image || riazi}
          className=" w-full h-auto object-contain"
          alt={name}
        />

        <div
          className="
          p-4 
          text-center flex flex-col justify-center items-center 
        "
        >
          <h1
            className="
            text-sm 
            font-semibold
            pb-0 mt-0 
          "
          >
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardContent;