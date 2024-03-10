import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import MentorProfile from './components/MentorProfile';
import Mainpage from './components/Mainpage';
import LoadingBar from 'react-top-loading-bar';
import Studentsignup from './components/Studentsignup';
import Mentorsignup from './components/Mentorsignup';

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <Router>
        <LoadingBar color='#f11946' progress={progress} />

        <Routes>
          <Route exact path='/' element={<Mainpage setprogress={handleProgress} />} />
          <Route exact path='/home' element={<Homepage setprogress={handleProgress} />} />
          <Route exact path='/studentsignup' element={<Studentsignup setprogress={handleProgress} />} />
          <Route exact path='/mentorsignup' element={<Mentorsignup setprogress={handleProgress} />} />
          <Route path="/mentorprofile/:id" element={<MentorProfile setprogress={handleProgress} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
