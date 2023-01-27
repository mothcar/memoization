import { useState } from 'react'
import './App.css'

function calculate() {
  console.log('web is rerendered....')
    return 10;
  }

function App() {
  const [hardNumber, setHardNumber] = useState(0)
  const [isDark, setDark] = useState(false)

  const number = calculate()
  const hardSum = 1000 + hardNumber 
  console.log('web is rerendered....')
  const myTheme = {
    backgroundColor: isDark?'black': 'white',
    color : isDark?'white':'black'
  }

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

        <div>
         <button onClick={()=>{setDark((e)=>!e)}}>Change Theme</button>
        </div>
        <div style={myTheme}> This is Our Theme </div>
      </div>
      
    </div>
  )
}

export default App
