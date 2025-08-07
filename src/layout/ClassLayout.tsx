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

// Define the order of routes for swipe direction logic
const routeOrder = ['/teacher/students', '/teacher/reports', '/teacher/chat'];
const getRouteIndex = (pathname: string) => routeOrder.findIndex(p => pathname.startsWith(p));

const ClassLayout = () => {
  const { data: classes, isLoading } = useQuery<TeacherClass[]>({
        queryKey: ['teacherClasses'],
        queryFn: async () => {
            console.log("API CALL: fetching classes for Header");
            const res = await axios.get('https://kiddo2.pythonanywhere.com/api/v1/academics/classes/');
            console.log("API RESPONSE: fetching classes for Header success", res.data);
            return res.data;
        },
        staleTime: 300000,
    });

  const headerTitle = isLoading 
    ? 'در حال بارگذاری...' 
    : (classes && classes.length > 0 ? classes[0].name : 'کلاس من');
    
  return (
    <div>
      <Header title={headerTitle} />
      <Navbar />
      <div className='bg-backGround-1 min-h-screen '>
        <div className='mx-[16px] '>
          <StudentAlert />
          <main className='relative overflow-x-hidden pt-[16px]'>
           <Outlet/>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassLayout;