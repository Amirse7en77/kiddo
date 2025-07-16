import React from 'react';
import konjkav from './../../../../assets/images/konjkav.png';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img src={konjkav} className="w-[104px] h-[104px] mb-10 mt-5" />
      <h1 className="mb-10">لطفا موضوع مورد نظر را انتخاب کنید</h1>
    </div>
  );
};

export default HeroSection;
