import { useState, useEffect } from 'react';
import { FaSave, FaDownload } from 'react-icons/fa';
import { saveData } from '../utils/localStorage'; // utility to save data
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const handleDownloadPDF = () => {
    const input = document.getElementById('planner'); // Set an id for your planner container
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('daily_planner.pdf');
    });
};

const Planner = () => {
    const [date, setDate] = useState('');
    const [weather, setWeather] = useState('');
    const [mood, setMood] = useState('');
    const [tasks, setTasks] = useState([]);
    const [goals, setGoals] = useState('');
    const [reminders, setReminders] = useState('');
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '', snacks: '' });
    const [waterIntake, setWaterIntake] = useState(0);
    const [exercise, setExercise] = useState({ minutes: '', steps: '' });
    const [gratitude, setGratitude] = useState('');
    const [money, setMoney] = useState({ income: '', expense: '', source: '', purpose: '' });
    const [notes, setNotes] = useState('');
    const [tomorrowTasks, setTomorrowTasks] = useState('');

    useEffect(() => {
        setDate(new Date().toISOString().split('T')[0]);
    }, []);

    const handleSave = () => {
        const plannerData = {
            date,
            weather,
            mood,
            tasks,
            goals,
            reminders,
            meals,
            waterIntake,
            exercise,
            gratitude,
            money,
            notes,
            tomorrowTasks,
        };
        saveData(plannerData); // save to local storage
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Daily Planner</h1>

            <button onClick={handleDownloadPDF} className="mt-4 flex items-center bg-green-600 p-2 rounded">
                <FaDownload className="mr-2" /> Download PDF
            </button>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-4 p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
                type="text"
                placeholder="Weather"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="mt-2 p-2 rounded bg-gray-800 border border-gray-700"
            />
            {/* Mood Tracker */}
            <div className="mt-4">
                <h2 className="font-semibold">Mood:</h2>
                {/* Mood icons can be added here */}
                <input type="text" placeholder="Mood" value={mood} onChange={(e) => setMood(e.target.value)} className="p-2 rounded bg-gray-800 border border-gray-700" />
            </div>
            {/* To-Do List */}
            <div className="mt-4">
                <h2 className="font-semibold">To-Do List:</h2>
                {tasks.map((task, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            onChange={() => setTasks(tasks.filter((_, i) => i !== index))}
                        />
                        <input
                            type="text"
                            className="p-2 rounded bg-gray-800 border border-gray-700 ml-2"
                            value={task}
                            onChange={(e) => {
                                const newTasks = [...tasks];
                                newTasks[index] = e.target.value;
                                setTasks(newTasks);
                            }}
                        />
                    </div>
                ))}
                <button
                    onClick={() => setTasks([...tasks, ''])}
                    className="mt-2 text-blue-500"
                >
                    Add Task
                </button>
            </div>
            {/* Goals, Reminders, Meals, Water Intake, Exercise, Gratitude, Money, Notes, Tomorrow Tasks */}
            {/* Similar structure can be repeated for each section */}
            <button onClick={handleSave} className="mt-4 flex items-center bg-blue-600 p-2 rounded">
                <FaSave className="mr-2" /> Save
            </button>
        </div>
    );
};

export default Planner;
