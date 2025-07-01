
import kiddoFace from './../../assets/images/Kiddos.png'




const HeroSection = () => {
  return (
    <div>
        <div className='flex justify-center mt-4 p-4'>
        <img src={kiddoFace}/>
      </div>
      <p className='text-center'>به درس یار خوش آمدی!</p>
    </div>
  )
}

export default HeroSection