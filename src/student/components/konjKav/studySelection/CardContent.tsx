import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import riazi from "./../../../../assets/images/riazi.png";
import { activeButtonReducer, disableButtonReducer } from "../../../../slice/konjkavSlice";

interface CardContentProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const CardContent: React.FC<CardContentProps> = ({ title, isSelected, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSelected) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [isSelected, dispatch]);

  return (
    <div className={`${isSelected ? `onClickedCard-box transform translate-y-1` : "card-box"}`}>
      <div
        className={`rounded-[22px] cursor-pointer transition-colors duration-200 flex flex-col overflow-hidden h-full ${isSelected ? `bg-backGroundCard` : "bg-white"}`}
        onClick={onClick}
      >
        <img
          src={riazi}
          className="w-full h-auto object-contain"
          alt={title}
        />
        <div className="p-4 text-center">
          <h1 className="text-sm font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardContent;