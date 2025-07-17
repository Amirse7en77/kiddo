import React from 'react';
import darsYar from './../../../assets/images/DarsYar.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 1. Define an interface for the structure of each class item
//    It's important to know what properties your API response objects have.
//    Assuming your API returns an array of objects like:
//    [{ id: '...', name: '...', length: ... }, ...]
interface ClassItem {
  id: string | number; // Assuming 'id' can be string or number based on backend
  name: string;
  length: number; // Assuming this represents the number of students
  // Add any other properties that your class objects might have from the API
}

const Classes: React.FC = () => {
  // Use a type assertion or provide a generic type to useQuery for better type inference
  const {
    data,
    isLoading,
    isError, // Add isError to handle fetch errors
    error,   // Add error to get the error object
  } = useQuery<ClassItem[]>({ // Expecting an array of ClassItem
    queryKey: ['classes'],
    queryFn: async () => { // Make queryFn async
      const response = await axios.get<ClassItem[]>(`https://kiddo2.pythonanywhere.com/api/v1/academics/classes`);
      return response.data; // TanStack Query expects the actual data, not the full Axios response
    },
    // Optional: add refetchOnWindowFocus: false if you don't want it refetching on tab focus
    // refetchOnWindowFocus: false,
  });

  // Log data when not loading, for debugging (can be removed in production)
  // Check if data exists before logging its structure, as it's undefined initially
  if (!isLoading && data) {
    console.log("Fetched Data:", data);
  }

  // 2. Handle different states: Loading, Error, and Success

  // Loading state
  if (isLoading) {
    return <div className="p-4 text-center text-gray-600">در حال بارگذاری کلاس‌ها...</div>; // "Loading classes..."
  }

  // Error state
  if (isError) {
    console.error("Error fetching classes:", error); // Log the error for debugging
    return <div className="p-4 text-center text-red-500">خطا در بارگذاری کلاس‌ها: {error?.message || 'نامشخص'}</div>; // "Error loading classes: ..."
  }

  // Success state: Data is available
  return (
    <>
      <div className="bg-backGround-1 p-4"> {/* A general container for the whole section */}
        {/* Check if data is an array and not empty before mapping */}
        {data && data.length > 0 ? (
          <div className=""> {/* Added space-y for consistent vertical spacing */}
            {data.map((classItem) => (
              <div key={classItem.id} className='mb-[12px]'> {/* key prop is essential */}
                <div className='card-box'> {/* Ensure .card-box is defined in your CSS */}
                  <div className='flex justify-start items-center bg-white rounded-[22px] p-[16px] gap-[16px] '>
                    <div>
                      <img className='w-[56px] h-[56px]' src={darsYar} alt={`تصویر ${classItem.name}`} /> {/* Dynamic alt text */}
                    </div>
                    <div className='flex flex-col '>
                      <h1 className='font-extrabold line-clamp-1 text-[14px]'>{classItem.name}</h1>
                      <div className='flex justify-start items-start'>
                        <p className='bg-backGround-1 px-[8px] rounded-[16px] text-[10px] py-[2px]'>
                          {classItem.length} دانش آموز
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Handle case where data is empty after loading
          <div className="p-4 text-center text-gray-500">کلاسی برای نمایش وجود ندارد.</div> // "No classes to display."
        )}
      </div>
    </>
  );
};

export default Classes;