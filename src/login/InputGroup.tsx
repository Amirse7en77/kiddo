import LoginButton from './LoginButton'

const InputGroup = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-[24px] p-6 space-y-6 bg-white '> {/* Added padding, space-y, background, and shadow */}
      <div className='w-full'> {/* Added w-full to make each input group take full width */}
        <p className='mb-2 text-right text-gray-700'>نام و نام خانوادگی</p> {/* Added margin-bottom and text color */}
        <input className='p-[16px] rounded-[16px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/> {/* Added border, focus styles */}
      </div>
      <div className='w-full'> {/* Added w-full */}
        <p className='mb-2 text-right text-gray-700'> کد ورود </p> {/* Added margin-bottom and text color */}
        <input className='p-[16px] rounded-[16px] border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <LoginButton />  {/* Clarified border, added focus styles */}
      </div>
      
    </div>
  )
}

export default InputGroup