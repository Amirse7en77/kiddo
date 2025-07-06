import React from 'react'
import Header from '../components/common/Header'
import ChatButton from '../components/common/ChatButton'
import HeroSection from '../components/lessonSelection/HeroSection'
import MainContent from '../components/lessonSelection/MainContent'

const LessonSelection = () => {
  return (
    <div>
      <div >
      <Header/>
      <div className='font-yekanBakh  bg-backGround-1 '>
        <HeroSection/>
        <MainContent/>
      </div>
      <ChatButton/>
    </div>
    </div>
  )
}

export default LessonSelection
