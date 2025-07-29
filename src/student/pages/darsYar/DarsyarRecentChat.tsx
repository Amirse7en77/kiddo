import ChatButton from "../../../components/common/ChatButton"
import Header from "../../../components/common/Header"
import RecentChats from "../../../components/RecentChats"
import { useNavigate } from "react-router-dom"

const DarsyarRecentChat = () => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    navigate("/student/darsyar/study-selection");
  };

  return (
    <>
      <div className='bg-backGround-1 min-h-screen'>
        <Header title={'درس‌یـــــار'}/>
        <div className='gap-[16px] m-[16px]'> 
          <h1 className=' font-extrabold text-[14px] mb-4'>چت‌های اخیر</h1>
        </div>
        <div className='flex flex-col gap-[12px] mx-[16px] pb-20'>
         <RecentChats/>
        </div>
      </div>
      <ChatButton textButton='ساخت چت جدید' onClick={handleNewChat}/>
    </>
  )
}

export default DarsyarRecentChat