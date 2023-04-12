import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Products/>
    </div>
  )
}

export default App
