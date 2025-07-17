import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from '../components/common/Header';
import Navbar from '../teacher/components/contentContainer/Navbar';
import StudentAlert from '../teacher/components/contentContainer/StudentAlert';

const ClassLayout = () => {
  return (
    <div>
      <Header title={'کلاس ششم'} />
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