import React, { useState } from 'react';

const CardContent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggles the state
  };

  return (
    <div className='flex flex-col justify-center gap-[16px] p-[16px] h-full'>
      <div className={` ${isClicked ? 'onClickedCard-box' : 'card-box'}`}>
        <div
          className={`gap-[8px] p-[16px] rounded-[24px] cursor-pointer ${
            isClicked ? 'bg-backGroundCard' : 'bg-white'
          }`}
          onClick={handleClick}
        >
          <h1>این یک کلاس است</h1>
        </div>
      </div>
    </div>
  );
};

export default CardContent;