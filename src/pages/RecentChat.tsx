import React from 'react'
import MainContent from '../components/recentChat/MainContent'
import Header from '../components/common/Header'
import ChatButton from '../components/common/ChatButton'

const RecentChat = () => {
  return (
   <>
    <div className='bg-backGround-1 font-yekanBakh'>
        <Header/>
        <h1 className='m-[16px] font-extrabold text-[18px]'>چت های اخیر</h1>
      <div className='h-[82vh] '>
        <MainContent/>
        <MainContent/>
        <MainContent/>
        
      </div>
      
    </div>
    <ChatButton textButton='ساخت چت جدید'/>
   </>
  )
}

export default RecentChat
