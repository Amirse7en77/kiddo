import React from 'react'
import konjkavImage from '../../../../assets/images/konjkav.png';

const HeroSection = () => {
  return (
    <div className="bg-primary p-6 rounded-b-[32px] text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">کنجکاو</h1>
          <p className="text-sm opacity-90">
            درس مورد نظر خود را انتخاب کنید
          </p>
        </div>
        <img src={konjkavImage} alt="Konjkav" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default HeroSection;
