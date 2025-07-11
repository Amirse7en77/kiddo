import React from 'react'
import Header from '../../components/common/Header'
import Navbar from '../components/contentContainer/Navbar'
import StudentsActivities from '../components/contentContainer/students/StudentsActivities'

const ContentContainer = () => {
  return (
    <div>
      <Header title={'کلاس ششم'}/>
      <Navbar/>
      <StudentsActivities/>
    </div>
  )
}

export default ContentContainer
