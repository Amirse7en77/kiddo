import React from 'react'
import darsYar from './../../../assets/images/DarsYar.png'

const Classes = () => {
  return (
     <div className='mb-[12px]'>
         <div className='card-box'>
            <div className='flex justify-start items-center bg-white rounded-[22px] p-[16px] gap-[16px] pl-[24px]'>
                <div>
                    <img className='w-[56px] h-[56px] ' src={darsYar}/>
                </div>
                <div className='flex flex-col gap-[4px] '>
                    <h1 className='font-extrabold line-clamp-1 w-[215px] text-[14px]'>کلاس ششم الف </h1>
                    <div className='flex justify-start items-start gap-[4px]'>
                        <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>22 دانش آموز</p>
                   
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Classes
