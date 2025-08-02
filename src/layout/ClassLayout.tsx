import React, { useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Navbar from '../teacher/components/contentContainer/Navbar';
import StudentAlert from '../teacher/components/contentContainer/StudentAlert';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useTransition, animated } from '@react-spring/web';

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
  const location = useLocation();
  const currentOutlet = useOutlet();

  // Ref to store the previous route's index
  const prevIndexRef = useRef(getRouteIndex(location.pathname));
  const currentIndex = getRouteIndex(location.pathname);

  // Determine animation direction: 1 for forward (right to left), -1 for backward (left to right)
  const direction = currentIndex > prevIndexRef.current ? 1 : -1;
  
  // Update the ref with the current index for the next navigation
  React.useEffect(() => {
    prevIndexRef.current = currentIndex;
  });

  // Setup the transition animation
  const transitions = useTransition(location, {
    key: location.pathname,
    from: { opacity: 0, transform: `translate3d(${direction * 100}%, 0, 0)` },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: `translate3d(${-direction * 50}%, 0, 0)`, position: 'absolute' },
    config: { tension: 220, friction: 25 },
  });

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
            {transitions((style, item) => (
              <animated.div style={style} className="w-full">
                {/* Clone the outlet so react-spring animates the correct component. The key is crucial. */}
                {currentOutlet && React.cloneElement(currentOutlet, { key: item.pathname })}
              </animated.div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassLayout;