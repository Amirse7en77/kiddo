import happyFace from './../../../../assets/images/happyFace.png'

const HeroSection = () => {
  return (
    <div className='mb-[32px] pt-[16px]'>
        <div className='flex justify-center  p-4'>
        <img src={happyFace}/>
      </div>
      <p className='text-center font-extrabold'>به کنج‌کاو خوش آمدی!</p>
    </div>
  )
}

export default HeroSection