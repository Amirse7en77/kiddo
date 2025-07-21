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
      const baseClasses = 'flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors duration-200';
      const activeClasses = 'bg-backGround-1';
      return `${baseClasses} ${isActive ? activeClasses : ''}`;
    };

    // This function provides classes for the text and icon
    const getContentClass = (isActive: boolean) => {
      return isActive ? 'font-extrabold text-gray-800' : 'text-gray-500';
    };

    return (
      <NavLink to={to} className={getNavLinkClass}>
        {({ isActive }) => (
          <>
            
            <img 
              src={icon} 
              className={`h-5 w-5 ${!isActive ? 'opacity-70' : ''}`}
              alt={`${label} icon`} 
            />
            <span className={getContentClass(isActive)}>{label}</span>
          </>
        )}
      </NavLink>
    );
  };

  return (
    <div>
      <div className='flex items-center justify-around bg-white py-2 px-2 text-[12px]'>
        <NavItem to="/teacher/students" label="دانش آموزان" icon={studentIcon} />
        <NavItem to="/teacher/reports" label="گزارشات" icon={reportIcon} />
        <NavItem to="/teacher/chat" label="چت ها" icon={chatIcon} />
      </div>
      <hr className="border-[2px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Navbar;