
import Header from '../components/common/Header'
import ChatBot from '../components/chatWithBot/ChatBot'
import LessonInformation from '../components/chatWithBot/LessonInformation'
import HeroSection from '../components/chatWithBot/HeroSection'
import { useState } from 'react'

const ChatWithBot = () => {
 const [ischatting, setIsChatting] = useState<boolean>(false);
 console.log(ischatting)
  return (
    <div>
      <Header/>
      <div className='bg-backGround-1 '>
      {!ischatting && (
        
      <div>
          <LessonInformation/>
      <HeroSection/>
      </div>
      )}
       
    </div>
     <ChatBot setIsChatting={setIsChatting} isChatting={ischatting}/>
    </div>
  )
}

export default ChatWithBot
