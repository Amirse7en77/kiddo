import React from 'react'
import { tarkibkonWelcomeConstant } from '../../../../constants/tarkibkonWelcomeConstant'


const CardSection:React.FC = () => {
  return (
  <div >
   {tarkibkonWelcomeConstant.map(study=>(
        <div className='card-box mb-[12px] gap-[12px] '>
        <div className=' flex justify-center flex-col bg-white rounded-[24px] gap-[8px] p-[16px] '>
            <div className='gap-[8px] flex items-center justify-start'>
               {study.logo}
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