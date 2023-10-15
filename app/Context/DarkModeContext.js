"use client"

import { createContext, useContext } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeContext = createContext();

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const { darkMode, toggleDarkMode } = useDarkMode();



  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
