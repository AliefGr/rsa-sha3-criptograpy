import React from "react";
import { useState } from "react";
import { verifySignature } from "../api";

const VerifyForm = () => {
  const [data, setData] = useState("");
  const [signature, setSignature] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await verifySignature(data, signature);
      setIsValid(response.isValid);
    } catch (error) {
      console.error("Error verifying signature:", error);
    }
  };
  return (
    <div>
      <div>
        <h2>Verify Digital Signature</h2>
        <form onSubmit={handleVerify}>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter text to verify"
          ></textarea>
          <textarea
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Enter signature"
          ></textarea>
          <button type="submit">Verify</button>
        </form>
        {isValid !== null && (
          <div>
            <h3>Verification Result:</h3>
            <p>{isValid ? "Valid Signature" : "Invalid Signature"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyForm;
