import React from "react";
import Notification from "./components/Notification";
import RegisterForm from "./components/RegisterForm";
import UpcomingMatch from "./components/UpcomingMatch";
import Winner from "./components/Winner";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Notification />
      <RegisterForm />
      <UpcomingMatch />
      <Winner />
      <Leaderboard />
    </div>
  );
}
