import React from 'react'
import darsYar from './../../assets/images/DarsYar.png'

const MainContent = () => {
  return (
    <>
    
    <div>
       <div className='card-box  mb-[12px] mx-[16px] '>
            <div className='flex justify-start items-center bg-white rounded-[24px] border-2 border-gray-300 p-[16px] gap-[16px] pl-[24px]'>
                <div>
                    <img className='w-[56px] h-[56px]' src={darsYar}/>
                </div>
                <div className='flex justify-center items-center flex-col gap-[4px]'>
                    <h1 className='font-extrabold line-clamp-1 w-[215px] '>توضیحات مربوط به فتوسنتز و بقیه اطلاعات مهم و کاربری</h1>
                    <div className='flex justify-center items-center gap-[4px]'>
                        <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-2xl '>درس یار</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-2xl'> فارسی</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-2xl'>19 خرداد</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default MainContent
