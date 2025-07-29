import { FC } from "react";
import React from "react"; // Import React for inline SVG
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ButtonType {
  title: string;
  onBackClick?: () => void; // Optional prop for handling back button click
}

const Header: FC<ButtonType> = ({ title }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const role=useSelector(state=>state?.user.role)
 
  const handleBackClick = () => {
    if (role==='STUDENT')
    navigate('/student')
  else{
    navigate('/teacher')
  
  }
  }

  
  return (
    <div>
      <header
        className={`
          flex items-center justify-between bg-white py-[24px] px-[16px] h-[52px]
          fixed top-0 w-full z-100
        `}
      >
        {/* Back Button on the left */}
        <div className="flex items-center ">
            <button onClick={handleBackClick} className="mr-4 ">
              {/* Rotated SVG for a left arrow */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
               
              >
                <path d="M9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L14.5858 11L9.29289 5.70711C8.90237 5.31658 8.90237 4.68342 9.29289 4.29289Z" fill="#333333"/> {/* Adjust fill color if needed */}
             </svg>
            </button>
          
        </div>

        {/* Title in the center */}
        <div className="text-[16px] font-extrabold absolute left-1/2 -translate-x-1/2">
          {title}
        </div>

        {/* Right-hand side (can be used for other elements if needed) */}
        <div className="w-[24px]"></div> {/* Placeholder to balance the left button if no other content */}
      </header>

      <div className="h-[52px]"></div>
      <hr className="border-[1.5px] border-borderColor-1 w-full fixed" />
    </div>
  );
};

export default Header;