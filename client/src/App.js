import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Importing Pages
import Landing from './pages/Landing';
import Vision from "./pages/Vision";
import Explore from "./pages/Explore";
import Opportunities from "./pages/Opportunities";
import ReachOut from "./pages/ReachOut";
import WebTech from './pages/WebTech';
import NonTech from './pages/NonTech';
import Core from './pages/Core';
import Media from './pages/Media';
import Misc from './pages/Misc';
import Header from "./components/Header";
import SkillsPage from './pages/SkillsPage';
import Signup from './pages/Signup';
import Login from './pages/login';

// Define the Loader component
const Loader = () => (
  <div className="loader">
    <svg className="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(193, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(223, 90%, 55%)" />
        </linearGradient>
      </defs>
      <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0, 10%, 10%, 0.1)" strokeWidth="16" strokeLinecap="round" />
      <path className="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="44 1111" strokeDashoffset="10" />
    </svg>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />

        <Route element={<Header />}>
          <Route path="/vision" element={<Vision />} />
          <Route path="/explore" element={<Explore />}>
            <Route index element={<WebTech />} />
            <Route path="nontech" element={<NonTech />} />
            <Route path="core" element={<Core />} />
            <Route path="media" element={<Media />} />
            <Route path="misc" element={<Misc />} />
          </Route>
          <Route path="/explore/:category/:skill" element={<SkillsPage />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/reach-out" element={<ReachOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
