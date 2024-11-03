// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import DailyPlanner from "./components/DailyPlanner";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main App component that handles routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<DailyPlanner />} />
      </Routes>
    </Router>
  );
};

export default App;
