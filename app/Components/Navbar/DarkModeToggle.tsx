"use client"
import React from 'react';
import { useDarkModeContext } from '../../Context/DarkModeContext';


const DarkModeToggle: React.FC = () => {
const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="toggle-path bg-gray-200 w-12 h-6 rounded-full shadow-inner"></div>
              <div
                className={`toggle-circle absolute top-0 w-6 h-6 bg-white rounded-full shadow-md transform left-0 transition-transform duration-300 ease-in-out 
                ${
                  darkMode ? 'translate-x-6 bg-black' : ''
                }`}
              />
            </div>
        
          </label>
        </div>
      </div>
    </div>

  );
};

export default DarkModeToggle;
