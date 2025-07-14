import { useSelector } from "react-redux"
import ChatButton from "../../../components/common/ChatButton"
import DisableChatButton from "../../../components/common/DisableChatButton"
import Header from "../../../components/common/Header"

import MainContent from "../../components/darsYar/lessonSelection/MainContent"
import HeroSection from "../../components/darsYar/lessonSelection/HeroSection"


const DarsyarLessonSelection = () => {
  const infoButton:boolean=useSelector((state)=>state?.darsyar?.studySelectionButton)
  return (
    <div>
      <div >
      <Header title={'درس‌یار'}/>
      <div className='  bg-backGround-1 '>
        <HeroSection/>
        <MainContent/>
      </div>
         {infoButton ?( <ChatButton textButton='ساخت چت جدید'/>) :( <DisableChatButton textButton='ساخت چت جدید'/>)}
    </div>
    </div>
  )
}

export default DarsyarLessonSelection
