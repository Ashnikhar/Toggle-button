import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import ThemeContext from './context/ThemeContext'
import ThemeSetter from './components/ThemeSetter'


function App() {
  const [count ,setCount]=useState(0)
  const [theme , setTheme] =useState("light")


  useEffect(()=>{
    console.log(`count is changed ${count}`)
  },[count])


  return (
    <div className="app-container">
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeSetter />
        <div className="counter">
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
