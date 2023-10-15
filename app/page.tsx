import Image from 'next/image'
import Counter from './Components/Counter'
import DarkModeToggle from './Components/Navbar/DarkModeToggle'
import { DarkModeProvider} from "./Context/DarkModeContext"
import Navbar from './Components/Navbar/Navbar';

export default function Home() {

  const greet = (name: boolean) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="container">
      <DarkModeProvider>
      <Navbar />
      
        
          
        <Counter />
        </DarkModeProvider>
    </div>
  )
}
