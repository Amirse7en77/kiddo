import React from 'react'
interface ProgressBarProps {
  progress: number; // The current progress percentage (0-100)
}

const ProgressQuestion:React.FC<ProgressBarProps> = ({ progress }) => {
     const clampedProgress = Math.max(0, Math.min(100, progress));
  return (
        <div className='mb-[12px]'>
         <div className='card-box'>
            <div className='flex flex-col items-center bg-white rounded-[24px] p-[16px] gap-[16px] pl-[24px]'>
             <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-[12px]'>
                        سوالات باقی مانده
                </h1>
                </div>
                <div className='mr-10 '>
                    <h1 className='bg-[#F2EFFF] rounded-[24px] text-backGroundButton py-[2px] px-[8px]'>
 50 از 100
                </h1>
                </div>
             </div>
                <div className="w-full  rounded-full h-4 bg-backGround-1 overflow-hidden ">
      <div
        className="bg-gradient-to-l from-custom-purple via-custom-orange-1 to-custom-orange-2 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${clampedProgress}%` }}
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
            </div>
        </div>
    </div>
    
  )
}

export default ProgressQuestion
