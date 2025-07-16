import React from "react";

export default function Leaderboard() {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', marginTop: '10px' }}>
      <h3>Top Players</h3>
      <ol>
        <li>PlayerA - 10 Kills</li>
        <li>PlayerB - 8 Kills</li>
        <li>PlayerC - 6 Kills</li>
      </ol>
    </div>
  );
}