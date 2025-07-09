import React from 'react'
import Header from '../../components/common/Header'

import HeroSection from '../../components/darsYar/lessonSelection/HeroSection'
import MainContent from '../../components/darsYar/lessonSelection/MainContent'
import DisableChatButton from '../../components/common/DisableChatButton'

const LessonSelection = () => {
  return (
    <div>
      <div >
      <Header/>
      <div className='  bg-backGround-1 '>
        <HeroSection/>
        <MainContent/>
      </div>
      <DisableChatButton textButton=' بزن بریم '/>
    </div>
    </div>
  )
}

export default LessonSelection
