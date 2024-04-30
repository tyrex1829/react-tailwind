import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind with React(Vite)</h1>
    </>
  )
}

export default App
