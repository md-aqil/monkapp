import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-6 z-10">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="py-4">
          {children}
        </div>
        <div className="flex justify-end pt-4">
          <button onClick={onClose} className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-lime-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
