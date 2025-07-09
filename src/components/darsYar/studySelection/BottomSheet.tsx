// src/components/BottomSheet.tsx
import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import useSpring and animated
import { useDrag } from '@use-gesture/react'; // Import useDrag

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string; // Optional for custom styling
  // New prop for controlling initial height or 'peek' height
  initialHeight?: number; // e.g., 50 (percentage of viewport height)
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
  initialHeight = 80, // Default to 80% of viewport height if not provided
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Define spring for animation (y-position)
  const [{ y }, api] = useSpring(() => ({
    y: window.innerHeight, // Start off-screen at the bottom
    config: { mass: 1, tension: 300, friction: 30 }, // Spring physics for natural feel
  }));

  // Function to set the sheet's y position
  const setSheetPosition = useCallback(
    (targetY: number, immediate = false) => {
      api.start({
        y: targetY,
        immediate,
        onRest: () => {
          if (targetY >= window.innerHeight * 0.95) { // If very close to fully closed
            onClose(); // Truly close the sheet
          }
        },
      });
    },
    [api, onClose]
  );

  // Calculate the 'full open' y position (top of the sheet)
  const getFullOpenY = useCallback(() => {
    // We want the top of the sheet to be at `100 - initialHeight` % from the top of the viewport
    // So, y = (1 - initialHeight / 100) * window.innerHeight
    return (1 - initialHeight / 100) * window.innerHeight;
  }, [initialHeight]);


  // Handle opening and closing animations based on `isOpen` prop
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling body
      // Move to the initial "open" position (e.g., 80% height from bottom)
      setSheetPosition(getFullOpenY(), true); // 'immediate' true to jump to initial position
      // Add a slight animation from there if needed
      api.start({ y: getFullOpenY() });
    } else {
      document.body.style.overflow = ''; // Restore body scrolling
      setSheetPosition(window.innerHeight); // Slide down completely
    }
  }, [isOpen, setSheetPosition, api, getFullOpenY]);

  // Drag gesture handler
  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled }) => {
      // Prevent dragging if sheet is not open or if movement is upward from a closed state
      if (!isOpen && my > 0) return;

      const fullOpenY = getFullOpenY();
      const currentY = y.get(); // Get current spring value

      if (last) {
        // When drag ends
        if (canceled) {
            // This case happens if you drag above the very top (full open)
            setSheetPosition(fullOpenY);
            return;
        }
        const minMovementToClose = window.innerHeight * 0.3; // Drag down 30% of screen to close
        const isMovingDownFast = vy > 0.5 && dy > 0; // Moving down quickly
        const isPulledDownEnough = currentY > fullOpenY + minMovementToClose; // Pulled down significantly

        if (isMovingDownFast || isPulledDownEnough) {
          // Close the sheet
          setSheetPosition(window.innerHeight);
          onClose(); // Call the prop to update parent state
        } else {
          // Snap back to the fully open position
          setSheetPosition(fullOpenY);
        }
      } else {
        // While dragging
        // Ensure y doesn't go above the full open position
        // Or if it does, apply resistance
        const newY = Math.max(currentY + my, fullOpenY * 0.5); // Prevent going too high, apply resistance
        api.set({ y: Math.max(newY, fullOpenY - 50) }); // Set current position, avoid going too far up
      }
    },
    { from: () => [0, y.get()], bounds: { top: 0, bottom: window.innerHeight } } // Set drag bounds
  );

  // Close when clicking outside (on the backdrop)
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (backdropRef.current && event.target === backdropRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  // Close when pressing Escape key
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Only add listeners if the sheet is supposed to be open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleClickOutside, handleEscapeKey]); // Depend on isOpen to re-run effect

  // Don't render anything if not open (or while it's animating closed)
  // We'll rely on the spring's y value to hide it, but the parent state also controls initial render
  if (!isOpen && y.get() >= window.innerHeight * 0.95) { // Only truly return null if closed and off-screen
     return null;
  }

  return (
    <div
      ref={backdropRef}
      className={`fixed inset-0 z-50 bg-black ${
        isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none' // Fade out backdrop
      } transition-opacity duration-300 flex items-end justify-center`}
      aria-modal="true"
      role="dialog"
    >
      <animated.div
        {...bind()} // Bind the drag gesture to this div
        style={{ y }} // Apply the animated y position
        className={`bg-white rounded-t-lg shadow-lg w-full max-w-md cursor-grab
                    ${className || ''}`}
      >
        {/* Grab Handle */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full cursor-grab active:cursor-grabbing"></div>
        </div>

        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
            aria-label="Close bottom sheet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[80vh]"> {/* Added max-h and overflow for scrollable content */}
          {children}
        </div>
      </animated.div>
    </div>
  );
};

export default BottomSheet;