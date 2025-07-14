import happyFace from './../assets/images/happyFace.png'

const HeroSection = () => {
  return (
    <div className='pb-[32px] pt-[16px] bg-backGround-1 h-[50vh]'>
        <div className='flex justify-center  p-4'>
        <img src={happyFace}/>
      </div>
      <p className='text-center font-extrabold'>به کیدو خوش آمدی!</p>
    </div>
  )
}

export default HeroSection