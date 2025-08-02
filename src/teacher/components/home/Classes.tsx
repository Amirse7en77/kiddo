import React from 'react';
import classImage from './../../../assets/images/class.webp'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingIndicator from '../../../components/common/LoadingIndicator';

interface Class {
    id: string;
    name: string;
}

interface Student {
  id: string;
  full_name: string;
  last_activity_at: string;
  activity_status: 'Active' | 'Inactive';
  current_mood: {
    emoji: string;
    text: string;
  } | null; // Allow current_mood to be null
}

const Classes: React.FC = () => {
  // Use a type assertion or provide a generic type to useQuery for better type inference
  const { data: classes, isLoading: isLoadingClasses } = useQuery<Class[]>({
        queryKey: ['teacherClasses'],
        queryFn: async () => {
            console.log("API CALL: fetching classes for teacher");
            const res = await axios.get('https://kiddo2.pythonanywhere.com/api/v1/academics/classes/');
            console.log("API RESPONSE: fetching classes success", res.data);
            return res.data;
        },
        staleTime: 300000, // Cache for 5 minutes
    });

    const classId = classes?.[0]?.id;

    const { data: students, isLoading: isLoadingStudents, isError, error } = useQuery<Student[]>({
        queryKey: ['students', classId],
        queryFn: async () => {
            console.log(`API CALL: fetching students for class ${classId}`);
            const res = await axios.get(`https://kiddo2.pythonanywhere.com/api/v1/academics/classes/${classId}/students/`);
            console.log(`API RESPONSE: fetching students for class ${classId} success`, res.data);
            return res.data;
        },
        enabled: !!classId,
    });
 
  // Log data when not loading, for debugging (can be removed in production)
  // Check if data exists before logging its structure, as it's undefined initially
  if (!isLoadingClasses && classes) {
    console.log("Fetched Data:", classes);
  }
  console.log(students)

  // 2. Handle different states: Loading, Error, and Success

  // Loading state
  if (isLoadingClasses) {
    return  <div className="flex justify-center items-center text-center">
                  <LoadingIndicator className="w-10 h-10 " />
                </div>;
  }

  // Error state
  if (isError) {
    console.error("Error fetching classes:", error); // Log the error for debugging
    return <div className="p-4 text-center text-red-500">خطا در بارگذاری کلاس‌ها: {error?.message || 'نامشخص'}</div>; // "Error loading classes: ..."
  }

  // Success state: Data is available
  return (
    <>
      <div className="bg-backGround-1 "> {/* A general container for the whole section */}
        {/* Check if data is an array and not empty before mapping */}
       
          <div className=""> {/* Added space-y for consistent vertical spacing */}
            {classes?.map((classItem) => (
              <div key={classItem.id} className='mb-[12px]'> {/* key prop is essential */}
                <div className='card-box'> {/* Ensure .card-box is defined in your CSS */}
                  <div className='flex justify-start items-center bg-white rounded-[24px] p-[16px] gap-[16px] '>
                    <div>
                      <img className='w-[56px] h-[56px]' src={classImage} alt={`تصویر ${classItem.name}`} /> {/* Dynamic alt text */}
                    </div>
                    <div className='flex flex-col '>
                      <h1 className='font-extrabold line-clamp-1 text-[14px]'>{classItem.name}</h1>
                      <div className='flex justify-start items-start'>
                        <p className='bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]'>
                          {students?.length} دانش آموز
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default Classes;