
import { useSelector } from 'react-redux';
import Header from '../../../components/common/Header';
import HeroSection from '../../components/darsYar/studySelection/HeroSection';
import MainContent from '../../components/darsYar/studySelection/MainContent';
import ChatButton from '../../../components/common/ChatButton';
import DisableChatButton from '../../../components/common/DisableChatButton';

const DarsyarStudySelection = () => {
   const infoButton:boolean=useSelector((state)=>state?.darsyar?.studySelectionButton)

  return (
    <div className="h-screen">
      <Header title={'درس‌یار'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <MainContent />
      </div>
      {infoButton ?( <ChatButton textButton='ساخت چت جدید'/>) :( <DisableChatButton textButton='ساخت چت جدید'/>)}


     
    </div>
  );
};

export default DarsyarStudySelection;