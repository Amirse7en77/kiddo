import React from 'react'
import happyFace from './../../assets/images/happyFace.png'

const HeroSection = () => {
  return (
    <div className='flex justify-center h-screen items-center flex-col'>
      <img src={happyFace} className='mb-[32px]'/>
      <h1>چطور میتونم کمکتون کنم</h1>
    </div>
  )
}

export default HeroSection
