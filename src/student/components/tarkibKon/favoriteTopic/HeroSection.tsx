import React from 'react';
import tarkibkon from './../../../../assets/images/tarkibkon.webp';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img src={tarkibkon} className="w-[104px] h-[104px] mb-10 mt-5" />
      <h1 className="mb-10 text-[16px] font-extrabold">حالا بگو چه موضوعی رو از همه بیشتر دوست داری؟</h1>
    </div>
  );
};

export default HeroSection;
