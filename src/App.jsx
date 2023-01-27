import { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

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
      <div style={{margin:'20px'}}>
        {number}
        
        <h3>어려운 계산기</h3>

        <input
          type="number"
          value={hardNumber}
          onChange={(e)=>{setHardNumber(parseInt(e.target.value))}}
          style={{margin:'20px'}}
        />

        <span> + 1000 = {hardSum} </span>

        <div>
         <button  style={{margin:'20px'}} onClick={()=>{setDark((e)=>!e)}}>Change Theme</button>
        </div>
        <div style={myTheme}> This is Our Theme </div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
