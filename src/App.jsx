import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const plusOne = () => {
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
  }

  const minusOne = () => {
    if (count <= 0) {
      alert("Value is already 0, Please add first to do minus operation");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1 className='mb-3.5'>Counter {count}</h1>
      <button onClick={plusOne} className='mr-1'>+1</button>
      <button onClick={minusOne} className='ml-1'>-1</button>
    </>
  )
}

export default App
