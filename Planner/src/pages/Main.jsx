import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { getEntriesFromLocalStorage } from '../utils/localStorage'; // Import your localStorage utility

const Main = () => {
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load entries from local storage on component mount
    useEffect(() => {
        const storedEntries = getEntriesFromLocalStorage();
        // Ensure we are setting the entries to an array
        if (Array.isArray(storedEntries)) {
            setEntries(storedEntries);
        } else {
            setEntries([]); // Set to empty array if not an array
        }
    }, []);

    // Filter entries based on search term
    const filteredEntries = entries.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Daily Planner</h1>
            <input
                type="text"
                placeholder="Search entries"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded mt-4"
            />
            <div className="mt-4">
                {filteredEntries.map((entry) => (
                    <Link to={`/entry/${entry.id}`} key={entry.id} className="block p-4 border rounded mb-2">
                        <h2 className="text-lg">{entry.title}</h2>
                        <p>{entry.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Main;
