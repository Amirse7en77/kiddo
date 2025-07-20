import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Navbar from '../teacher/components/contentContainer/Navbar';
import StudentAlert from '../teacher/components/contentContainer/StudentAlert';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define an interface for the class data structure
interface TeacherClass {
  id: string;
  name: string;
  grade_level: number;
}

const ClassLayout = () => {
  // Fetch the classes for the teacher using react-query
  const { data: classes, isLoading } = useQuery<TeacherClass[]>({
        queryKey: ['teacherClasses'], // Using a consistent key to leverage caching
        queryFn: async () => {
            console.log("API CALL: fetching classes for Header");
            const res = await axios.get('https://kiddo2.pythonanywhere.com/api/v1/academics/classes/');
            console.log("API RESPONSE: fetching classes for Header success", res.data);
            return res.data;
        },
        staleTime: 300000, // Cache data for 5 minutes
    });

  // Determine the header title based on the fetching state
  const headerTitle = isLoading 
    ? 'در حال بارگذاری...' 
    : (classes && classes.length > 0 ? classes[0].name : 'کلاس من');
    console.log(headerTitle)
    
      
  return (
    <div>
      <Header title={headerTitle} />
      <Navbar />
      <div className='bg-backGround-1 min-h-screen'>
        <div className='mx-[16px] '>
          <StudentAlert />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassLayout;