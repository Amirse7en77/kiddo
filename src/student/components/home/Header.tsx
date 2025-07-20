import { FC, useState, useEffect } from "react";
import { logout } from "../../../api"; // Import the logout function
import darsYar from './../../../assets/images/DarsYar.png';

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleLogout = () => {
    logout(); // Call the centralized logout function
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`
          flex items-center justify-between bg-white py-[24px] px-[16px] h-[52px]
          transition-all duration-300 ease-in-out z-50
          ${isSticky ? "fixed top-0 w-full shadow-md" : ""}
        `}
      >
        {/* Logout Icon Button on the left */}
        <button onClick={handleLogout} className="text-gray-600 hover:text-red-500 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
        </button>
        
        <div className="flex items-center">
            <img src={darsYar} className="h-[24px] w-[24px] ml-[8px]"/>
            <div className="text-xl font-bold">کیدو</div>
        </div>
        
        {/* Placeholder to balance the layout */}
        <div className="w-6"></div>
      </header>
      
      {isSticky && <div className="h-[52px]"></div>}
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Header;