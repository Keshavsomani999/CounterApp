"use client";
import { useState, useEffect } from 'react';
import { getCounterFromCookie, setCounterCookie } from '../utils/cookies';

const useCounter = () => {
  const [count, setCount] = useState(0); 

  
  useEffect(() => {
    const initialCount = getCounterFromCookie();
    setCount(initialCount);
  }, []);

  const increment = (value = 1) => {
    const newCount = count + value;
    setCount(newCount);
    setCounterCookie(newCount);
  };

  const decrement = (value = 1) => {
    const newCount = count - value;
    setCount(newCount);
    setCounterCookie(newCount);
  };

  return { count, increment, decrement };
};

export default useCounter;
