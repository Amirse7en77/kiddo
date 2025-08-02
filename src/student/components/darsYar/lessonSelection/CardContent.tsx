import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeButtonReducer, disableButtonReducer } from "../../../../slice/darsyarSlice";

interface CardContentProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const CardContent: React.FC<CardContentProps> = ({ title, isSelected, onClick }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  
 

  const handleClick = () => {
    onClick();
    setIsClicked(!isClicked); // Toggles the state
  };

  useEffect(() => {
    if (isClicked) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [isClicked, dispatch]); 

  return (
    // Changed m-2 to mb-[16px] for a bottom margin of 16px
    <div className="flex flex-col justify-center mb-[12px] ">
      <div
        className={` ${
          isClicked ? "onClickedButton-box " : "buttonClicked-box"
        }  `}
      >
        <div
          className={`gap-[8px] p-[16px] rounded-[16px] cursor-pointer ${
            isClicked ? "bg-backGroundCard" : "bg-white"
          }`}
          onClick={handleClick}
        >
          <div className="flex justify-start items-center ">
            <h1 className="text-[14px] font-extrabold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
