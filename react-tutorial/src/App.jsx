import React, { createContext, useReducer, useState } from 'react'
import './App.scss'
import Content from './components/Content/Content'


export const ThemeContext = createContext();


function App() {
  const [theme, setTheme] = useState(false);
  const handleToggleTheme = () => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{
      theme,
      handleToggleTheme
    }}>
      <div className='app'>
        
        <Content/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
