// src/App.tsx
import React, { useState } from 'react';
import BottomSheet from './BottomSheet';


function MainSheet() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">React TypeScript Tailwind Bottom Sheet</h1>

      <button
        onClick={openBottomSheet}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Open Bottom Sheet
      </button>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeBottomSheet}
        title="More Options"
        // You can add custom classes here if needed, e.g., for different sizes
        // className="max-w-xl"
      >
        <div className="space-y-4 text-gray-700">
          <p>This is the content of your bottom sheet.</p>
          <p>You can put any React components or HTML elements here.</p>
          <ul className="list-disc list-inside">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
          <button
            onClick={closeBottomSheet}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Close
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}

export default MainSheet;