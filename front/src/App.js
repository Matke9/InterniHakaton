import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subject from './pages/Subject';
import Calendar from './pages/Calendar';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Subjects" element={<Subject />} />
      <Route path="/Calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
