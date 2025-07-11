import React from 'react'
import { studyAssistantConstatnt } from '../../../../constants/studyAssistantConstant'

const CardSection:React.FC = () => {
  return (
  <div className='h-screen'>
   {studyAssistantConstatnt.map(study=>(
        <div className='card-box mb-[12px] gap-[12px] '>
        <div className=' flex justify-center flex-col bg-white rounded-[22px] gap-[8px] p-[16px] '>
            <div className='gap-[8px] flex items-center justify-start'>
               <img src={study.logo}/>
                <h1 className='font-extrabold text-[14px]'> {study.title}   </h1>

            </div>
             <div>
           <p className=' text-justify  text-[14px]'>{study.description}</p>
        </div>
            
        </div>
       
     </div>
  )
   )}
  </div>)
}

export default CardSection