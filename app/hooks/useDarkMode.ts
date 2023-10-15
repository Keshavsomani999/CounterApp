"use Client";

import { useState } from 'react';
import {
  getDarkModeFromCookie,
  setDarkModeCookie,
} from '../utils/cookies';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(getDarkModeFromCookie());

  const toggleDarkMode = () => {
    console.log(darkMode);
    
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setDarkModeCookie(newDarkMode);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
