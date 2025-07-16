import React, { useState } from "react";

export default function RegisterForm() {
  const [uid, setUid] = useState("");
  const [ign, setIgn] = useState("");
  const [upi, setUpi] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the terms.");
      return;
    }
    console.log("Submitted:", { uid, ign, upi });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="UID" value={uid} onChange={(e) => setUid(e.target.value)} />
      <input type="text" placeholder="In-Game Name" value={ign} onChange={(e) => setIgn(e.target.value)} />
      <input type="text" placeholder="UPI ID" value={upi} onChange={(e) => setUpi(e.target.value)} />
      <label>
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} /> I agree to Terms & Conditions
      </label>
      <button type="submit">Register</button>
    </form>
  );
}