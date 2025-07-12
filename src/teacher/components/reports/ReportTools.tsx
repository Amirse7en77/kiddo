import React from 'react'

interface ReportType{
  title:string
}

const ReportTools:React.FC<ReportType> = ({title}) => {
  return (
     
                    <div className='card-box'>
            <div className='flex justify-start items-center bg-white rounded-[22px] p-[16px]  '>
                
                <div className='flex   '>
                    <h1 className='font-extrabold  text-[14px]'> {title}</h1>
                    
                </div>
               
                
            </div>
        </div>

           
  )
}

export default ReportTools