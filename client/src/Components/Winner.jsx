import React from "react";

export default function Winner() {
  return (
    <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
      <h3>🏆 Yesterday's Winners</h3>
      <ul>
        <li>Player1 - ₹150</li>
        <li>Player2 - ₹100</li>
        <li>Player3 - ₹50</li>
      </ul>
    </div>
  );
}
