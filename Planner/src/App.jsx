import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Planner from './pages/Planner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  );
}

export default App;
