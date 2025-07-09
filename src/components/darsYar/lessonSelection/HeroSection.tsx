import React from 'react'
import darsYar from './../../../assets/images/DarsYar.png'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-[32px] pt-[16px]'>
      <img src={darsYar} className='w-[104px] h-[104px]'/>
      <h1 className='mb-10 text-[16px] font-yekanBakhText'>
        لطفا یکی از درس ها را انتخاب کنید
      </h1>
    </div>
  )
}

export default HeroSection
