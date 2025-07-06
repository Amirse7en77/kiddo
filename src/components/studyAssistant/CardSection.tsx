import React from 'react'
import { studyAssistantConstatnt } from '../../constants/studyAssistantConstant'

const CardSection:React.FC = () => {
  return (
  <div >
   {studyAssistantConstatnt.map(study=>(
        <div className='card-box mb-4'>
        <div className=' flex justify-center flex-col bg-white rounded-[24px] border-2 border-gray-300 p-[16px] '>
            <div className='gap-[8px] flex items-center justify-start'>
               <img src={study.logo}/>
                <h1 className='font-extrabold'> {study.title}   </h1>

            </div>
             <div>
           <p className=' text-justify font-yekanBakhText'>{study.description}</p>
        </div>
            
        </div>
       
     </div>
  )
   )}
  </div>)
}

export default CardSection