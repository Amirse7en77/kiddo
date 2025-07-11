import ChatButton from "../../../components/common/ChatButton"
import Header from "../../../components/common/Header"
import RecentChatCard from "../../../components/common/RecentChatCard"


const DarsyarRecentChat = () => {
  return (
    <>
      <div className='bg-backGround-1'>
        <Header title={'درس‌یار'}/>
        {/* Changed gap to 16px here */}
        <div className='gap-[16px] m-[16px]'> 
          <h1 className=' font-extrabold text-[14px] '>چت های اخیر</h1>
        </div>
        <div className=' flex flex-col gap-[12px] mx-[16px]'>
          <RecentChatCard/>
           <RecentChatCard/>
            <RecentChatCard/>
             <RecentChatCard/>
              <RecentChatCard/>
               <RecentChatCard/>
        </div>
      </div>
      <ChatButton textButton='ساخت چت جدید'/>
    </>
  )
}

export default DarsyarRecentChat