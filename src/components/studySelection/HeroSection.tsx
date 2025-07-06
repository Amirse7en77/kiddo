import React from 'react'
import darsYar from './../../assets/images/DarsYar.png'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <img src={darsYar} className='w-[104px] h-[104px] mb-10 mt-5'/>
      <h1 className='mb-10'>
        لطفا یکی از درس ها را انتخاب کنید
      </h1>
    </div>
  )
}

export default HeroSection
