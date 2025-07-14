import LoginButton from './LoginButton'

const InputGroup = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded-[24px] p-[40px] space-y-6 bg-white border-[2px] border-borderColor-1 rounded-b-none'> {/* Added padding, space-y, background, and shadow */}
      <div className='w-full mb-[16px]'> {/* Added w-full to make each input group take full width */}
        <p className='mb-[12px] text-right text-[14px] font-extrabold '>نام و نام خانوادگی</p> {/* Added margin-bottom and text color */}
        <input className='p-[16px] rounded-[16px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/> {/* Added border, focus styles */}
      </div>
      <div className='w-full mb-[40px]'> {/* Added w-full */}
        <p className='mb-[12px] text-right text-[14px] font-extrabold'> کد ورود </p> {/* Added margin-bottom and text color */}
        <input className='p-[16px] rounded-[16px] border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'/>
      
      </div>
        <LoginButton />  
    </div>
  )
}

export default InputGroup