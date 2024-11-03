// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

// LandingPage component to display all previous entries
const LandingPage = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        setEntries(storedEntries);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">My Daily Planner Entries</h1>
            <div className="flex flex-col gap-4">
                {entries.map((entry, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="text-xl font-semibold text-white">{entry.date}</p>
                            <p className="text-white">{entry.notes}</p>
                        </div>
                        <div>
                            {entry.mood === "good" ? (
                                <FaSmile className="text-green-500" />
                            ) : entry.mood === "neutral" ? (
                                <FaMeh className="text-yellow-500" />
                            ) : (
                                <FaFrown className="text-red-500" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/planner">
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600 transition">
                    Add New Entry
                </button>
            </Link>
        </div>
    );
};

export default LandingPage;
