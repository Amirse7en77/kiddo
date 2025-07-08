import { FC, useState, useEffect } from "react";
import darsYar from './../../assets/images/DarsYar.png'
const Header: FC = () => {
  const [isSticky, setIsSticky] = useState(false); // State to track stickiness

  useEffect(() => {
    const handleScroll = () => {
      // Determine the scroll position at which the header should become sticky.
      // A common approach is to make it sticky once it scrolls past its initial position.
      // For simplicity, let's say 10 pixels from the top. You might adjust this.
      const offset = window.scrollY;
      if (offset > 10) { // Or headerRef.current.offsetTop if you want it exact
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div>
      <header
        className={`
          flex items-center justify-center bg-white py-[24px] px-[16px] h-[52px]
          transition-all duration-300 ease-in-out z-50
          ${isSticky ? "fixed top-0 w-full shadow-md" : ""}
        `}
      >
        <div className="rounded-md flex items-center justify-center ">
          {/* Your left content (e.g., menu icon) */}
        </div>
        <img src={darsYar} className="h-[24px] w-[24px] ml-[8px]"/>
        <div className="text-xl font-bold">کیدو</div>
        
        {/* Your right content (e.g., user icon) */}
      </header>
      {/*
        This div acts as a "spacer" to prevent content from jumping up
        when the header becomes `position: fixed`.
        Its height should match the header's height (52px in your case).
      */}
      {isSticky && <div className="h-[52px]"></div>}
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Header;