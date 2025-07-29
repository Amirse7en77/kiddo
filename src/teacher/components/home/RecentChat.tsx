import React from 'react'
import darsyar from './../../../assets/images/darsyar.webp'

const RecentChatCard = () => {
  return (
    <div>
         <div className='card-box mb-[12px]'>
            <div className='flex justify-start items-center bg-white rounded-[24px] p-[16px] gap-[16px] pl-[24px]'>
                <div>
                    <img className='w-[56px] h-[56px] ' src={darsyar}/>
                </div>
                <div className='flex flex-col gap-[4px] '>
                    <h1 className='font-extrabold line-clamp-1 w-[215px] text-[14px]'>توضیحات مربوط به فتوسنتز و بقیه اطلاعات مهم و کاربری</h1>
                    <div className='flex justify-start items-start gap-[4px]'>
                        <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>د‌رس‌یار</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'> فارسی</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]' >19 خرداد</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default RecentChatCard
