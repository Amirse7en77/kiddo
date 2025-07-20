import React from 'react';
import smallhappyface from './../../../../assets/images/smallhappyface.png';
import recent from './../../../../assets/images/recent.png';

// Define the shape of the student data we expect as a prop
interface Student {
  id: string;
  full_name: string;
  last_activity_at: string;
  activity_status: 'Active' | 'Inactive';
  current_mood: {
    emoji: string;
    text: string;
  } | null; // It's important to allow this to be null
}

interface StudentActivityProps {
  // The component receives a single student object
  student: Student;
}

const StudentActivity: React.FC<StudentActivityProps> = ({ student }) => {
  // Helper function to format date string into a more readable Persian format
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

  // Map the English activity status from API to Persian
  const activityStatusMap = {
    Active: 'فعال',
    Inactive: 'غیرفعال',
  };

  return (
    <div>
      <div className="flex p-[16px] gap-[16px] items-center">
        <div>
          <img  src={smallhappyface} alt="student icon" />
        </div>
        <div className="flex flex-col w-full">
          {/* Top row with name and status tags */}
          <div className="flex justify-between items-center mb-[8px]">
            <div className="flex">
              <h1 className="font-extrabold text-[14px]">{student.full_name}</h1>
            </div>
            <div className="flex gap-x-2">
              <p className="bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]">
                {activityStatusMap[student.activity_status] || student.activity_status}
              </p>
              {/* Only render the mood tag if current_mood is not null */}
              {student.current_mood && (
                <p className="bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]">
                  {student.current_mood.text}
                </p>
              )}
            </div>
          </div>
          {/* Bottom row with last activity date */}
          <div className="flex justify-between items-center">
            <div className="flex">
              <h1 className="font-extrabold text-[10px]">
                آخرین فعالیت : {formatDate(student.last_activity_at)}
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