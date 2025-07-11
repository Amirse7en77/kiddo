import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeButtonReducer, disableButtonReducer } from "../../../../slice/darsyarSlice";

const CardContent = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked)

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggles the state
  };
  const dispatch = useDispatch();


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
          isClicked ? "onClickedButton-box transform translate-y-1" : "buttonClicked-box"
        }  `}
      >
        <div
          className={`gap-[8px] p-[16px] rounded-[16px] cursor-pointer ${
            isClicked ? "bg-backGroundCard" : "bg-white"
          }`}
          onClick={handleClick}
        >
          <div className="flex justify-start items-center ">
            <h1 className="text-[14px] font-extrabold">این یک کلاس است/</h1>
            <p className="text-[14px] ">کلاس نهم </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
