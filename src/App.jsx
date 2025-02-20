import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState('')

  return (
    <div className='app'>
      <input type="text" placeholder='Type something' value={text} onChange={(e)=>settext(e.target.value)} />
      <h1><strong>you typed:{text}</strong></h1>
      <h1>text length={text.length}</h1>
    </div>
  )
}

export default App
