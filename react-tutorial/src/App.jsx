import React, { useReducer } from 'react'
import './App.scss'

function App() {
  const [todo, dispatch] = useReducer(reducer, initState);
  return (
    <div className='app'>
      
    </div>
  )
}

export default App
