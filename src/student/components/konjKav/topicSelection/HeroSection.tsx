import konjkavImage from '../../../../assets/images/konjkav.png';
import { useSelector } from 'react-redux';

interface RootState {
  konjkav: {
    selectedStudy: string | null;
  };
}

const HeroSection = () => {
  const selectedStudy = useSelector((state: RootState) => state.konjkav.selectedStudy);

  return (
    <div className="mx-[16px]">
      <div className="bg-white rounded-2xl mt-4 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="w-[64px] h-[64px] bg-backGround-1 rounded-2xl flex justify-center items-center">
              <img src={konjkavImage} alt="Konjkav" className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">انتخاب موضوع مورد علاقه</h2>
              <p className="text-sm text-gray-600">در {selectedStudy} چه موضوعی برات جذابه؟</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            می‌تونی چند موضوع رو انتخاب کنی و درباره‌شون سوال بپرسی
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
