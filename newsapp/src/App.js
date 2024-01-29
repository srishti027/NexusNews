// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={5} country="in" category="Business" />} />
          <Route path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route path="/General" element={<News setProgress={setProgress} key="General" pageSize={5} country="in" category="General" />} />
          <Route path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={5} country="in" category="Health" />} />
          <Route path="/Science" element={<News setProgress={setProgress} key="Science" pageSize={5} country="in" category="science" />} />
          <Route path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={5} country="in" category="Sports" />} />
          <Route path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
