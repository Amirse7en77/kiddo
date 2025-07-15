import React from 'react'
import darsYar from './../../assets/images/DarsYar.png'

interface RecentChatCardProps {
  title: string;
  tool: string;
  subject: string;
  updatedAt: string;
}

const RecentChatCard: React.FC<RecentChatCardProps> = ({ title, tool, subject, updatedAt }) => {
  const formatDate = (dateString: string) => {
    try {
      // Make sure we have a valid date string
      if (!dateString) return '';

      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return '';
      }

      // Format options for Persian date
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
      };

      return new Intl.DateTimeFormat('fa-IR', options).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  return (
    <div>
         <div className='card-box'>
            <div className='flex justify-start items-center bg-white rounded-[22px] p-[16px] gap-[16px] pl-[24px]'>
                <div>
                    <img className='w-[56px] h-[56px] ' src={darsYar} alt={tool} />
                </div>
                <div className='flex flex-col gap-[4px] '>
                    <h1 className='font-extrabold line-clamp-1 w-[215px] text-[14px]'>{title}</h1>
                    <div className='flex justify-start items-start gap-[4px]'>
                        <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>{tool}</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>{subject}</p>
                    <p className='bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>
                        {formatDate(updatedAt)}
                    </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default RecentChatCard
