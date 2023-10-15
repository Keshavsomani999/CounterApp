// components/Navbar.tsx

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
          <a className="text-white text-2xl font-bold">Counter App</a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
