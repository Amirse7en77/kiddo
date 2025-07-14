// src/components/Modal.tsx
import React, { FC, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string; // Optional title for the modal
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Click outside to close (optional, if you want to explicitly close on backdrop click)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-opacity-25 flex items-center justify-center "
      onClick={handleBackdropClick} // Only close if clicking on the backdrop, not the modal content itself
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Modal content */}
      <div
        ref={modalRef}
        className="bg-white rounded-[24px] p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all  rounded-b-none"
      >
        <div className="flex justify-center items-center pb-3 mb-4">
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;