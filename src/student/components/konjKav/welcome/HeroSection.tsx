import happyFace from './../../../../assets/images/happyFace.png'

const HeroSection = () => {
  return (
    <div className='mb-[32px] pt-[24px]'>
        <div className='flex justify-center   mb-[32px]'>
        <img src={happyFace}/>
      </div>
      <p className='text-center font-extrabold'>به کنج‌کـــاو خوش اومدی!</p>
    </div>
  )
}

export default HeroSection