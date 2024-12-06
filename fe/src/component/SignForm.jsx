import React from "react";
import { useState } from "react";
import { createSignature } from "../api";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const SignForm = () => {
  const [data, setData] = useState("");
  const [signature, setSignature] = useState("");

  const handleChange = (e) => {
    setSignature(e.target.value);
  };
  const handleSign = async (e) => {
    e.preventDefault();
    try {
      const response = await createSignature(data);
      setSignature(response.signature);
    } catch (error) {
      console.error("Error signing data:", error);
    }
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-2xl p-8 border-2 border-green-500 transform hover:scale-102 transition-all duration-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
        <LockClosedIcon className="w-8 h-8 mr-2" />
        Create Digital Signature
      </h2>
      <form onSubmit={handleSign} className="space-y-6">
        <div>
          <label
            htmlFor="data"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Text to Sign
          </label>
          <textarea
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter text to sign"
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent sm:text-sm text-white p-3 transition-all duration-200 placeholder-gray-400"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
        >
          <LockClosedIcon className="w-5 h-5 mr-2" />
          Sign
        </button>
      </form>
      {signature && (
        <div className="mt-6 animate-fade-in">
          <h3 className="text-xl font-medium text-green-400 mb-2">
            Generated Signature:
          </h3>
          <textarea
            value={signature}
            onChange={handleChange}
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent sm:text-sm text-white p-3 transition-all duration-200"
            rows={4}
            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default SignForm;
