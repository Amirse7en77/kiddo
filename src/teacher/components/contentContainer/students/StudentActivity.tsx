import React from 'react';
import { useNavigate } from 'react-router-dom';
import smallhappyface from './../../../../assets/images/smallhappyface.png';
import recent from './../../../../assets/images/recent.png';
import { FluentEmoji } from '@lobehub/ui';

interface Student {
  id: string;
  full_name: string;
  last_activity_at: string;
  activity_status: 'Active' | 'Inactive';
  current_mood: {
    emoji: string;
    text: string;
  } | null;
}

interface StudentActivityProps {
  student: Student;
}

const StudentActivity: React.FC<StudentActivityProps> = ({ student }) => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    console.log(`Navigating to chats for student: ${student.full_name} (ID: ${student.id})`);
    navigate(`/teacher/student/${student.id}/chats`, { 
      state: { studentName: student.full_name } 
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  };

  const activityStatusMap = {
    Active: 'فعال',
    Inactive: 'غیرفعال',
  };

  return (
    <div onClick={handleStudentClick} className="cursor-pointer hover:bg-gray-50 transition-colors duration-150">
      <div className="flex p-[16px] gap-[16px] items-center">
        <div>
          <img  src={smallhappyface} alt="student icon" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-[8px]">
            <div className="flex">
              <h1 className="font-extrabold text-[14px]">{student.full_name}</h1>
            </div>
            <div className="flex gap-x-2">
              <p className="bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]">
                {activityStatusMap[student.activity_status] || student.activity_status}
              </p>
              <p className="bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]">
                <p><FluentEmoji emoji="🙂" type="anim" size={16}/></p>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <h1 className="font-extrabold text-[10px]">
                آخرین فعالیت : {(student.last_activity_at)?(formatDate(student.last_activity_at)):(<span>بدون فعالیت</span>)}
              </h1>
            </div>
           <div>
            <img src={recent}/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentActivity;