import React from 'react'
import Modal from '../../Modal';
interface StudentModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const ToolsModal:React.FC<StudentModalProps> = ({isModalOpen,handleCloseModal}) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Welcome to My Modal">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Modal Content Goes Here</h3>
        <p className="text-gray-700 mb-4">
          This is a simple example of a modal built with React, TypeScript, and Tailwind CSS.
          You can put any content you want inside this modal.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert('Action confirmed!');
              handleCloseModal();
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Confirm Action
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ToolsModal
