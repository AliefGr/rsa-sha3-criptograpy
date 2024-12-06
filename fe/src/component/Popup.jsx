import React from 'react';

const Popup = ({ isOpen, onClose, isValid }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-green-500 max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold text-green-400 mb-4">Verification Result</h3>
        <p className={`text-lg font-semibold mb-4 ${isValid ? 'text-green-500' : 'text-red-500'}`}>
          {isValid ? "Valid Signature" : "Invalid Signature"}
        </p>
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-green-500 text-black rounded hover:bg-green-600 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
