import Header from '../../../components/common/Header'
import ChatButton from '../../../components/common/ChatButton'
import RecentChats from '../../../components/RecentChats'
import { useNavigate } from 'react-router-dom'

const TarkibkonRecentChat = () => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    navigate('/student/tarkibkon/welcome');
  };

  return (
    <>
      <div className='bg-backGround-1 min-h-screen'>
        <Header title={'ترکــــــیب‌کن'}/>
        <div className='gap-[16px] m-[16px]'> 
          <h1 className=' font-extrabold text-[14px] mb-4'>چت‌های اخیر</h1>
        </div>
        <div className=' flex flex-col gap-[12px] mx-[16px] pb-20'>
          <RecentChats/>
        </div>
      </div>
      <ChatButton textButton='ساخت چت جدید' onClick={handleNewChat} />
    </>
  )
}

export default TarkibkonRecentChat