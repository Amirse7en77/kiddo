import React from 'react'

const Navbar = () => {
  return (
   <div>
     <div className='flex justify-between items-center bg-white py-[8px] px-[16px] text-[12px] font-extrabold'>
        <div>
            <h1>
                دانش آموزان
            </h1>
        </div>
         <div>
            <h1>
                گزارشات
            </h1>
        </div>
         <div>
            <h1>
                چت ها
            </h1>
        </div>
      
    </div>
    <hr className="border-[2px] border-borderColor-1 w-full" />
   </div>
  )
}

export default Navbar
