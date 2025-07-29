import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import riazi from "./../../../../assets/images/riazi.png";
import { activeButtonReducer, disableButtonReducer } from "../../../../slice/tarkibkonSlice";

interface CardContentProps {
  name: string;
  isSelected: boolean;
  image:string,
  selectedCardId: string | null;
  onClick: () => void;
}

const CardContent: React.FC<CardContentProps> = ({image, name, isSelected, onClick, selectedCardId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCardId) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [selectedCardId, dispatch]);

  return (
    <div className={`${isSelected ? `onClickedCard-box transform translate-y-1` : "card-box"}`}>
      <div
        className={`rounded-[24px] cursor-pointer transition-colors duration-200 flex flex-col overflow-hidden h-full ${isSelected ? `bg-backGroundCard` : "bg-white"}`}
        onClick={onClick}
      >
        <img src={image || riazi} className="w-full h-auto object-contain" alt={name}/>
        <div className="p-4 text-center">
          <h1 className="text-sm font-semibold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardContent;