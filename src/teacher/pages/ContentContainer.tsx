import React from 'react'
import Header from '../../components/common/Header'
import Navbar from '../components/contentContainer/Navbar'
import StudentsActivities from '../components/contentContainer/students/StudentsActivities'
import StudentAlert from '../components/contentContainer/StudentAlert'

const ContentContainer = () => {
  return (
    <div>
      <Header title={'کلاس ششم'}/>
      <Navbar/>
      
        <div className='bg-backGround-1 h-screen'>
          <div className='mx-[16px] '>
        <StudentAlert/>
      <StudentsActivities/>
      
      </div>
        </div>
    </div>
  )
}

export default ContentContainer
