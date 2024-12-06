import React, { useState } from "react";
import { verifySignature } from "../api";
import Popup from "./Popup";
import { ShieldCheckIcon, DocumentCheckIcon, FingerPrintIcon } from '@heroicons/react/24/solid';

const VerifyForm = () => {
  const [data, setData] = useState("");
  const [signature, setSignature] = useState("");
  const [isValid, setIsValid] = useState(null); // Tidak perlu tipe di JSX
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await verifySignature(data, signature);
      setIsValid(response.isValid);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error verifying signature:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-2xl p-8 border-2 border-green-500 transform hover:scale-102 transition-all duration-300 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
        <ShieldCheckIcon className="w-8 h-8 mr-2" />
        Verify Digital Signature
      </h2>
      
      <form onSubmit={handleVerify} className="space-y-6">
        <div>
          <label htmlFor="verifyData" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <DocumentCheckIcon className="w-5 h-5 mr-2" />
            Text to Verify
          </label>
          <textarea
            id="verifyData"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter text to verify"
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent sm:text-sm text-white p-3 transition-all duration-200 placeholder-gray-400"
            rows={4}
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <FingerPrintIcon className="w-5 h-5 mr-2" />
            Signature
          </label>
          <textarea
            id="signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Enter signature"
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent sm:text-sm text-white p-3 transition-all duration-200 placeholder-gray-400"
            rows={4}
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
        >
          <ShieldCheckIcon className="w-5 h-5 mr-2" />
          Verify Signature
        </button>
      </form>
      
      {/* Pastikan isValid hanya diteruskan jika nilainya sudah tidak null */}
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          isValid={isValid !== null ? isValid : false} // Default ke false jika null
        />
      )}
    </div>
  );
};

export default VerifyForm;

