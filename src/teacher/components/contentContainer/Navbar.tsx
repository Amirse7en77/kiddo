import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // This function will be called by NavLink to determine the className
  const getNavLinkClass = ({ isActive }) => {
    // Add a bold style or a different color if the link is active
    return isActive ? 'font-extrabold text-blue-600' : 'font-extrabold';
  };

  return (
    <div>
      <div className='flex justify-between items-center bg-white py-[8px] px-[16px] text-[12px]'>
        <div>
          <NavLink to="/teacher/students" className={getNavLinkClass}>
            دانش آموزان
          </NavLink>
        </div>
        <div>
          <NavLink to="/teacher/reports" className={getNavLinkClass}>
            گزارشات
          </NavLink>
        </div>
        <div>
          <NavLink to="/teacher/chat" className={getNavLinkClass}>
            چت ها
          </NavLink>
        </div>
      </div>
      <hr className="border-[2px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Navbar;