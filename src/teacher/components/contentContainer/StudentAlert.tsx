import React from 'react'

const StudentAlert = () => {
  return (
    <div className='py-[16px]'>
         <div className='alert-box '>
            <div className='flex justify-between items-center bg-[#FFF0F0] rounded-[16px] px-[16px] py-[12px] gap-[16px] pl-[24px] text-[#FE4C4A] text-[12px]'>
              
                <div className='flex flex-col gap-[4px] '>
                    <h1 className=' line-clamp-1 '>علی رفتار های خطرناکی دارد</h1>
                   
                </div>
                 <div className='flex flex-col gap-[4px] '>
                    <h1 className='font-extrabold line-clamp-1  '>بررسی</h1>
                   
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default StudentAlert