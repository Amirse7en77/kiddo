import happyFace from './../assets/images/happyFace.png'

const HeroSection = () => {
  return (
    <div className='pb-[32px] pt-[16px]   flex justify-center items-center flex-col h-[60vh]'>
        <div className=' p-4'>
        <img src={happyFace}/>
      </div>
      <p className='text-center font-extrabold'>به کیــــدو  خوش آمدی!</p>
    </div>
  )
}

export default HeroSection