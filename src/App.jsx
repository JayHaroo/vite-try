import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="center-box">
      <div className="contents">
        < div className="wel-text">Welcome!</div>
        <div className="info-text">Made in Vite + React!</div>
        <img src={viteLogo} alt="Vite Logo" />
      </div>
    </div>
    </>
  )
}

export default App
