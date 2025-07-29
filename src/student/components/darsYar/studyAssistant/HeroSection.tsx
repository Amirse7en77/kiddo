
import kiddoFace from './../../../../assets/images/happyFace.png'




const HeroSection = () => {
  return (
    <div className='mb-[32px] pt-[16px]'>
        <div className='flex justify-center  p-4'>
        <img src={kiddoFace}/>
      </div>
      <p className='text-center text-[16px] font-extrabold'>به درس‌یار خوش آمدی!</p>
    </div>
  )
}

export default HeroSection