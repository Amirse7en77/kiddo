import ChatButton from "../../../components/common/ChatButton"
import Header from "../../../components/common/Header"

import RecentChats from "../../../components/RecentChats"

const KonjkavRecentChat = () => {
  return (
    <>
      <div className='bg-backGround-1'>
        <Header title={'کنج‌کاو'}/>
        {/* Changed gap to 16px here */}
        <div className='gap-[16px] m-[16px]'> 
          <h1 className=' font-extrabold text-[14px] '>چت های اخیر</h1>
        </div>
        <div className=' flex flex-col gap-[12px] mx-[16px]'>
          <RecentChats/>
          
        </div>
      </div>
      <ChatButton textButton='ساخت چت جدید'/>
    </>
  )
}

export default KonjkavRecentChat