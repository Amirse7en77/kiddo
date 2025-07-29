// src/components/common/RecentChatCard.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// Import tool icons
import darsyarIcon from './../../assets/images/darsyar.webp';
import konjkavIcon from './../../assets/images/konjkav.webp';
import tarkibkonIcon from './../../assets/images/tarkibkon.webp';
import azmonIcon from './../../assets/images/azmon.webp';
import defaultIcon from './../../assets/images/happyface.webp';

interface RecentChatCardProps {
  id: string;
  title: string;
  tool: string;
  subject: string;
  updatedAt: string;
}

const toolInfoMap: { [key: string]: { name: string; icon: string } } = {
  DARS_YAR: { name: 'درس‌یار', icon: darsyarIcon },
  KONJKAV_SHO: { name: 'کنجکاو', icon: konjkavIcon },
  TARKIB_KON: { name: 'ترکیب‌کن', icon: tarkibkonIcon },
  AZMOON_SAZ: { name: 'آزمون‌ساز', icon: azmonIcon },
};

const RecentChatCard: React.FC<RecentChatCardProps> = ({ id, title, tool, subject, updatedAt }) => {
  const navigate = useNavigate();
  const userRole = useSelector((state: RootState) => state.user.role);

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('fa-IR', options).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  const toolDetails = toolInfoMap[tool] || { name: tool, icon: defaultIcon };

  const handleClick = () => {
    console.log(`Navigating to chat session: ${id}`);
    const basePath = userRole === 'STUDENT' ? '/student' : '/teacher';
    navigate(`${basePath}/chat/${id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className='card-box'>
        <div className='flex justify-start items-center bg-white rounded-[24px] p-[16px] gap-[16px]'>
          <div>
            <img className='w-[56px] h-[56px]' src={toolDetails.icon} alt={toolDetails.name} />
          </div>
          <div className='flex flex-col gap-[4px] w-full overflow-hidden'>
            <h1 className='font-extrabold truncate text-[14px]'>{title}</h1>
            <div className='flex flex-wrap items-center gap-[4px]'>
              <p className='bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]'>{toolDetails.name}</p>
              <p className='bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]'>{subject}</p>
              <p className='bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]'>
                {formatDate(updatedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentChatCard;