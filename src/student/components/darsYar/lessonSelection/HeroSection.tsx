import React from 'react'
import darsYar from './../../../../assets/images/darsyar.webp'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-[32px] pt-[16px]'>
      <img src={darsYar} className='w-[104px] h-[104px]'/>
      <h1 className='mb-10 text-[16px]  font-extrabold'>
       حالا درس‌هایی که می‌خوای رو انتخاب کن!
      </h1>
    </div>
  )
}

export default HeroSection
