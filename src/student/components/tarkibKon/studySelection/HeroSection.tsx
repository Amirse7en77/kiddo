import React from 'react'
import tarkibkon from './../../../../assets/images/tarkibkon.webp'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <img src={tarkibkon} className='w-[104px] h-[104px] mb-10 mt-5'/>
      <h1 className='mb-10 text-[16px] font-extrabold'>
        اول یکی از کتاب‌هات رو انتخاب کن.
      </h1>
    </div>
  )
}

export default HeroSection
