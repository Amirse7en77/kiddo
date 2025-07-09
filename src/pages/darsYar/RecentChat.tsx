
import Header from '../../components/common/Header'
import ChatButton from '../../components/common/ChatButton'
import RecentChatCard from '../../components/darsYar/recentChat/RecentChatCard'

const RecentChat = () => {
  return (
    <>
      <div className='bg-backGround-1'>
        <Header/>
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

export default RecentChat