// Import necessary libraries and components
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloud, FaSun, FaCloudRain } from "react-icons/fa";

// DailyPlanner component with form to enter daily planning data
const DailyPlanner = () => {
    const [entry, setEntry] = useState({
        date: "",
        mood: "",
        toDoList: [],
        goals: "",
        reminder: "",
        mealTracker: { breakfast: "", lunch: "", dinner: "", snacks: "" },
        waterIntake: 0,
        exercise: { minutes: 0, steps: 0 },
        gratitude: "",
        money: { in: "", out: "", reason: "" },
        notes: "",
        tomorrow: ""
    });

    const navigate = useNavigate();

    const handleSave = () => {
        const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        storedEntries.push(entry);
        localStorage.setItem("entries", JSON.stringify(storedEntries));
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">Daily Planner</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Date Input */}
                <input
                    type="date"
                    className="bg-gray-800 p-2 rounded text-gray-100"
                    value={entry.date}
                    onChange={(e) => setEntry({ ...entry, date: e.target.value })}
                />
                {/* Mood Selection */}
                <div className="flex items-center space-x-4">
                    <FaSun className="text-yellow-500 cursor-pointer" onClick={() => setEntry({ ...entry, mood: "good" })} />
                    <FaCloud className="text-gray-500 cursor-pointer" onClick={() => setEntry({ ...entry, mood: "neutral" })} />
                    <FaCloudRain className="text-blue-500 cursor-pointer" onClick={() => setEntry({ ...entry, mood: "bad" })} />
                </div>
                {/* To Do List */}
                <textarea
                    className="bg-gray-800 p-2 rounded text-gray-100"
                    placeholder="To Do List"
                    onChange={(e) => setEntry({ ...entry, toDoList: e.target.value.split("\n") })}
                />
                {/* Goals */}
                <textarea
                    className="bg-gray-800 p-2 rounded text-gray-100"
                    placeholder="Goals"
                    onChange={(e) => setEntry({ ...entry, goals: e.target.value })}
                />
                {/* Save Button */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600 transition" onClick={handleSave}>
                    Save Entry
                </button>
            </div>
        </div>
    );
};

export default DailyPlanner;
