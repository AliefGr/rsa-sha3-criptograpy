import React from "react";
import { useState } from "react";
import { createSignature } from "../api";

const SignForm = () => {
  const [data, setData] = useState("");
  const [signature, setSignature] = useState("");
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
    <div>
      <h2>Create Digital Signature</h2>
      <form onSubmit={handleSign}>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter text to sign"
        ></textarea>
        <button type="submit">Sign</button>
      </form>
      {signature && (
        <div>
          <h3>Generated Signature:</h3>
          <p>{signature}</p>
        </div>
      )}
    </div>
  );
};

export default SignForm;
