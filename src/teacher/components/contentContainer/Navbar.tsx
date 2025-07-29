import React from 'react';
import { NavLink } from 'react-router-dom';
import studentIcon from './../../../assets/images/reportsPage/student.png';
import reportIcon from './../../../assets/images/reportsPage/report.png';
import chatIcon from './../../../assets/images/reportsPage/chat.png';

const Navbar = () => {
  // A reusable component for each navigation item
  interface NavItemProps {
    to: string;
    icon: string;
    label: string;
  }

  const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
    // This function provides the classes for the NavLink container
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
      const baseClasses = 'flex items-center justify-center gap-2 px-2 py-2 rounded-[16px] flex-1 min-w-0 ';
      const activeClasses = 'bg-backGround-1';
      return `${baseClasses} ${isActive ? activeClasses : ''}`;
    };

    return (
      <NavLink to={to} className={getNavLinkClass}>
        {({ isActive }) => (
          <>
            <img 
              src={icon} 
              className="w-4 h-4 flex-shrink-0"
              alt={`${label} icon`} 
            />
            <span className={`${isActive ? 'font-extrabold text-[14px]' : 'text-[12px]'} truncate text-center`}>
              {label}
            </span>
          </>
        )}
      </NavLink>
    );
  };

  return (
    <div>
      <div className='flex items-center bg-white py-2 px-2 text-[12px] w-full'>
        <NavItem to="/teacher/students" label="دانش آموزان" icon={studentIcon} />
        <NavItem to="/teacher/reports" label="گزارشات" icon={reportIcon} />
        <NavItem to="/teacher/chat" label="چت ها" icon={chatIcon} />
      </div>
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Navbar;