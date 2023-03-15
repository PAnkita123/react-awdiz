import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from 'react'

function App() {
  const [name, setName] = useState(0);
  function increment() {
    setName(name + 1)
  }
  function decrement() {
    setName(name - 1)
  }
  return (
    <div className="App">
      <h1>Initial Value{name}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}
    
export default App;

