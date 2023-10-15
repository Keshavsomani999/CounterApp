"use client";
import React,{useEffect,useState} from 'react'
import useCounter from '../hooks/useCounter'
import { useDarkModeContext } from '../Context/DarkModeContext';

const Counter = () => {

    const {count, increment, decrement} =  useCounter();
    const [customValue, setCustomValue] = useState<number>(1);
    const { darkMode, toggleDarkMode } = useDarkModeContext();
    
    const handleCustomIncrement = () => {
        increment(customValue);
      };
    
      const handleCustomDecrement = () => {
        decrement(customValue);
      };

  return (
    
    <div className={`h-screen flex justify-center  ${darkMode ? 'dark' : ''} bg-gray-100  `}>
  <div className={`p-4 text-center `}>
    <h1 className="mb-24 mt-4  text-6xl font-semibold">Counter</h1>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md mr-4"
      onClick={() => decrement()}
    >
      Decrement
    </button>
    <span className="text-xl font-semibold mr-4">Count: {count}</span>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
      onClick={() => increment()}
    >
      Increment
    </button>

    {/* Input for custom value */}
    <div className="mt-4">
      <input
        type="number"
        className={` border p-2 rounded-lg w-20 ${darkMode ? "text-blue-700" : ""}`}
        value={customValue}
        onChange={(e) => setCustomValue(parseInt(e.target.value))}
      />
      <button
        className="bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md ml-4"
        onClick={() => handleCustomDecrement()}
      >
        Custom Decrement
      </button>
      <button
        className="bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md ml-4"
        onClick={() => handleCustomIncrement()}
      >
        Custom Increment
      </button>
    </div>
  </div>
</div>


  )
}

export default Counter