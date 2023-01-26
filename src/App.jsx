import { useState } from 'react'
import './App.css'

function calculate() {
    return 10;
  }

function App() {
  const [hardNumber, setHardNumber] = useState(0)

  const number = calculate()
  const hardSum = 1000 + hardNumber 

  return (
    <div className="App">
      <div>
        {number}
        <h1>어려운 계산기</h1>

        <input
          type="number"
          value={hardNumber}
          onChange={(e)=>{setHardNumber(parseInt(e.target.value))}}
        />

        <span> + 1000 = {hardSum} </span>
      </div>
      
    </div>
  )
}

export default App
